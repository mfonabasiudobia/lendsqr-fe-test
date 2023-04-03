import { TextModel } from "./Models/Text";
import useAtomicStyle from "@/Views/Hooks/useAtomicStyle";

const Text: React.FC<TextModel> = ({
  variant = "span",
  className,
  elevation,
  size,
  color,
  margin,
  padding,
  align,
  weight,
  spacingX,
  spacingY,
  spacing,
  text,
  children,
}) => {
  const Tag = variant;

  const styles = {
    variantClass:
      variant === "button"
        ? "text-center inline-block cursor-pointer rounded px-5 py-2"
        : // : variant === "h1"
          // ? "leading-[52px] md:leading-[67.6px] text-[40px] md:text-[52px]"
          // : variant === "h2"
          // ? "text-[20px] md:text-[24px]"
          null,
    importedStyles: useAtomicStyle({
      size,
      color,
      margin,
      padding,
      className,
      elevation,
      align,
      weight,
      spacingX,
      spacingY,
      spacing,
    }),
  };

  return (
    <Tag className={`${Object.values(styles).join(" ")}`}>
      {text ? text : children}
    </Tag>
  );
};

export default Text;
