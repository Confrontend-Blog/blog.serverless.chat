import * as React from "react";
import { SVGProps } from "react";

const SvgSend = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" {...props}>
    <path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z" />
  </svg>
);

export default SvgSend;
