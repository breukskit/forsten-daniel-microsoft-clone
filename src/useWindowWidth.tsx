import { useState, useEffect } from "react";

const getWindowWidth = (): string => {
  let returnValue = "";
  if (window.innerWidth >= 1132) {
    returnValue = "xl";
  } else if (window.innerWidth >= 975 && window.innerWidth < 1132) {
    returnValue = "large";
  } else if (window.innerWidth >= 910 && window.innerWidth < 975) {
    returnValue = "medium";
  } else if (window.innerWidth >= 860 && window.innerWidth < 910) {
    returnValue = "small";
  } else if (window.innerWidth >= 1 && window.innerWidth < 860) {
    returnValue = "mobile";
  }
  return returnValue;
};

export const useWindowWidth = () => {
  const [viewPort, setViewPort] = useState<string>(getWindowWidth());
  const setWindowWidth = () => {
    if (window.innerWidth >= 1132) {
      setViewPort("xl");
    } else if (window.innerWidth >= 975 && window.innerWidth < 1132) {
      setViewPort("large");
    } else if (window.innerWidth >= 910 && window.innerWidth < 975) {
      setViewPort("medium");
    } else if (window.innerWidth >= 860 && window.innerWidth < 910) {
      setViewPort("small");
    } else if (window.innerWidth > 1 && window.innerWidth < 860) {
      setViewPort("mobile");
    }
  };
  window.addEventListener("resize", setWindowWidth);
  return viewPort;
};
