import React, { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import Quill from "quill";
// Quill's Snow theme CSS provides the editor styles and icons. Importing it here
// ensures Vite bundles the stylesheet and the editor appears like the Quill
// playground (toolbars, icons, editor padding, etc.).
import "quill/dist/quill.snow.css";
import "./Editor.css";

// Editor is an uncontrolled React component
const Editor = forwardRef(
  ({ readOnly, defaultValue, onTextChange, onSelectionChange }, ref) => {
    const containerRef = useRef(null);
    const defaultValueRef = useRef(defaultValue);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    useEffect(() => {
      ref.current?.enable(!readOnly);
    }, [ref, readOnly]);

    useEffect(() => {
      const container = containerRef.current;
      const editorContainer = container.appendChild(
        container.ownerDocument.createElement("div"),
      );
      const quill = new Quill(editorContainer, {
        theme: "snow",
      });

      ref.current = quill;

      if (defaultValueRef.current) {
        quill.setContents(defaultValueRef.current);
      }

      quill.on(Quill.events.TEXT_CHANGE, (...args) => {
        onTextChangeRef.current?.(...args);
      });

      quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
        onSelectionChangeRef.current?.(...args);
      });

      // Move picker options to document.body so dropdowns overlay the page
      // instead of expanding inside the toolbar. Keep references to cleanup.
      const movedPickers = [];
      const repositionFns = [];
      try {
        const toolbar = container.querySelector(".ql-toolbar");
        if (toolbar) {
          const pickers = toolbar.querySelectorAll(".ql-picker");
          pickers.forEach((picker) => {
            const label = picker.querySelector(".ql-picker-label");
            const options = picker.querySelector(".ql-picker-options");
            if (!label || !options) return;

            // move options to body
            document.body.appendChild(options);
            options.style.position = "absolute";
            options.style.zIndex = "10000";
            options.style.minWidth = "110px";
            options.style.whiteSpace = "nowrap";

            const reposition = () => {
              const rect = label.getBoundingClientRect();
              options.style.top = `${rect.bottom + window.scrollY + 6}px`;
              options.style.left = `${rect.left + window.scrollX}px`;
            };

            // reposition on open (Quill toggles visibility on click) and on scroll/resize
            const onClick = () => setTimeout(reposition, 0);
            label.addEventListener("click", onClick);
            window.addEventListener("scroll", reposition);
            window.addEventListener("resize", reposition);

            // keep refs for cleanup
            movedPickers.push({ picker, options });
            repositionFns.push({ label, onClick, reposition });
          });
        }
      } catch (err) {
        // ignore any DOM errors
        console.warn("picker reposition error", err);
      }

      return () => {
        // cleanup moved pickers and event listeners
        try {
          repositionFns.forEach(({ label, onClick, reposition }) => {
            label.removeEventListener("click", onClick);
            window.removeEventListener("scroll", reposition);
            window.removeEventListener("resize", reposition);
          });

          // move options back into original pickers if still present
          movedPickers.forEach(({ picker, options }) => {
            if (picker && options) {
              picker.appendChild(options);
              options.style.position = "";
              options.style.top = "";
              options.style.left = "";
              options.style.zIndex = "";
              options.style.minWidth = "";
            }
          });
        } catch (err) {
          // ignore cleanup errors
        }

        ref.current = null;
        container.innerHTML = "";
      };
    }, [ref]);

    return <div ref={containerRef}></div>;
  },
);

Editor.displayName = "Editor";

export default Editor;
