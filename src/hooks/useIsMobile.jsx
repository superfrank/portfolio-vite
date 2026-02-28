import { useEffect, useState } from "react";

const useIsMobile = (breakpoint = 979) => {
  const query = `(max-width: ${breakpoint}px)`;
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(query);

    const onChange = (event) => {
      setIsMobile(event.matches);
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [query]);

  return isMobile;
};

export default useIsMobile;
