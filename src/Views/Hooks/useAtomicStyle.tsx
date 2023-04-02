import { StyleModel } from "./Models";

/*Note this functions will return null or empty string when their values are not passed to the props useAtomicStyle*/

const useAtomicStyle = ({
  size,
  margin,
  padding,
  align,
  weight,
  spacingX,
  spacingY,
  spacing,
  className,
  elevation,
  color,
}: StyleModel) => {
  const getFontWeight = () => (weight ? `font-${weight}` : null);

  const getTextColor = () => (color ? `text-${color}` : null);

  const getFontSize = () => (size ? `text-${size}` : null);

  const getSpacingY = () => (spacingY ? `space-y-${spacingY}` : null);

  const getSpacingX = () => (spacingX ? `space-y-${spacingX}` : null);

  const getSpacing = () => (spacing ? `space-${spacing}` : null);

  const getMarginSize = () => (margin ? margin : "m-0");

  const getPaddingSize = () => (padding ? padding : "p-0");

  const getAlignment = () => (align ? `text-${align}` : null);

  const getElevation = () => (elevation ? `shadow-${elevation}` : null);

  return `
    ${getFontWeight()}
    ${getTextColor()}
    ${getFontSize()}
    ${getMarginSize()}
    ${getPaddingSize()}
    ${getSpacingY()}
    ${getSpacingX()}
    ${getSpacing()}
    ${getAlignment()}
    ${getElevation()}
    ${className}
  `;
};

export default useAtomicStyle;
