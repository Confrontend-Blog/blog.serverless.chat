import {
  AccountCircleWhite24Dp,
  Send,
  EmojiEmotionsWhite24Dp,
} from "./resources/icons";

export const allIcons = {
  AccountCircleWhite24Dp,
  Send,
  EmojiEmotionsWhite24Dp,
};

export type IconType = keyof typeof allIcons;

/**
 * SvgIcon based on react-svgr
 * @component
 * @see https://react-svgr.com/docs/options/
 * @returns
 */
export const SvgIcon = ({
  type,
  className,
}: {
  type: IconType;
  className?: string;
}): JSX.Element => {
  const IconSvg = allIcons[type];
  return <IconSvg className={className} />;
};
