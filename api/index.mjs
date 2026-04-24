// Vercel serverless function bridging Vercel's Node (req, res) API
// to TanStack Start's web-standard Fetch handler.
// The built SSR server lives at dist/server/server.js (included via vercel.json).
import server from "../dist/server/server.js";

export default async function handler(req, res) {
  try {
    const protocol = req.headers["x-forwarded-proto"] || "https";
    const host = req.headers["x-forwarded-host"] || req.headers.host;
    const url = `${protocol}://${host}${req.url}`;

    // Buffer request body for non-GET/HEAD requests
    const hasBody = !["GET", "HEAD"].includes(req.method);
    const body = hasBody
      ? await new Promise((resolve, reject) => {
          const chunks = [];
          req.on("data", (chunk) => chunks.push(chunk));
          req.on("end", () => resolve(Buffer.concat(chunks)));
          req.on("error", reject);
        })
      : undefined;

    // Filter out Node-specific pseudo-headers that Request() rejects
    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value == null) continue;
      if (key.startsWith(":")) continue;
      if (Array.isArray(value)) {
        for (const v of value) headers.append(key, String(v));
      } else {
        headers.set(key, String(value));
      }
    }

    const request = new Request(url, {
      method: req.method,
      headers,
      body,
    });

    const response = await server.fetch(request);

    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (response.body) {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(Buffer.from(value));
      }
    }
    res.end();
  } catch (err) {
    console.error("SSR handler error:", err);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end("Internal Server Error");
  }
}
