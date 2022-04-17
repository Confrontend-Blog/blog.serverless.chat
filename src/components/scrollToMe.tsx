/**
 * Dummy Element to Scroll to on parent change
 */
import { useRef } from "react";
import { useEffect } from "react";

export const ScrollToMe = (): JSX.Element => {
  const anchor = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    anchor?.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  });

  return <span ref={anchor} />;
};
