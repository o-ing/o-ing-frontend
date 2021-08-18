const { useState, useEffect } = require("react");

export default function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState(Number(window.innerWidth));

  const handleResize = () => setWindowWidth(Number(window.innerWidth));

  const evalWindowSize = (size) => {
    if (size <= 700) {
      return WINDOW_SIZE_TYPE.SMALL;
    } else if (size <= 1270) {
      return WINDOW_SIZE_TYPE.MEDIUM;
    } else {
      return WINDOW_SIZE_TYPE.LARGE;
    }
  };

  const [windowSize, setWindowSize] = useState(evalWindowSize(windowWidth));

  window.addEventListener("resize", handleResize);

  useEffect(() => {
    setWindowSize(evalWindowSize(windowWidth));
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth, windowSize]);
  return windowSize;
}

export const WINDOW_SIZE_TYPE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};
