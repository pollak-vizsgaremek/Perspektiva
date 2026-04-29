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

      // NOTE: moving picker option nodes out of Quill's toolbar can break
      // Quill internals because Quill keeps references to those nodes. To
      // avoid runtime errors we intentionally do not move picker options.
      // If overlaying is required, consider using CSS or cloning nodes
      // carefully. For now, leave pickers in place.

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
