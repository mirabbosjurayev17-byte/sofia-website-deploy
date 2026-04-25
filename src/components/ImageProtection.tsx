import { useEffect } from "react";

/**
 * Lightweight, casual-grade image protection.
 * - Disables right-click (context menu) globally
 * - Disables drag start on images
 * - Blocks Ctrl/Cmd + S (save page) and Ctrl/Cmd + U (view source)
 *
 * Note: nothing prevents a determined user from opening DevTools, but this
 * deters casual copying without breaking UX (links, buttons, sliders, hover).
 */
export function ImageProtection() {
  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    const onDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.tagName === "IMG") {
        e.preventDefault();
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      const mod = e.ctrlKey || e.metaKey;
      if (!mod) return;
      const key = e.key.toLowerCase();
      if (key === "s" || key === "u") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}
