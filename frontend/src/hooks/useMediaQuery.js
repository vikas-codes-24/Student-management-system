import { useState, useEffect } from "react";

/**
 * Hook that tracks whether a CSS media query matches.
 * @param {string} query - The media query string (e.g. "(max-width: 768px)")
 * @returns {boolean} Whether the query matches
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (event) => setMatches(event.matches);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
}
