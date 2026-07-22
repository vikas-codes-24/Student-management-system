import { useEffect, useRef } from "react";

/**
 * Hook that calls a handler when a click occurs outside the referenced element.
 * @param {Function} handler - Callback when click outside is detected
 * @returns {React.RefObject} Ref to attach to the element
 */
export function useClickOutside(handler) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [handler]);

  return ref;
}
