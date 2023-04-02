import Link from "next/link";
import { LinkModel } from "./Models/Link";
import useAtomicStyle from "@/Views/Hooks/useAtomicStyle";

const TextLink: React.FC<LinkModel> = ({
  variant = "text",
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
  href,
  underline = "hover",
  text,
  children,
}) => {
  const getBackgroundColor = () => (color ? `bg-${color}` : null);

  const getBorderColor = () => (color ? `border-${color}` : null);

  const styles = {
    variantClass: ` 
    ${
      variant === "text"
        ? "inline-block"
        : variant === "button-contained"
        ? `${getBackgroundColor()} no-underline text-center inline-block rounded px-5 py-2 text-white hover:bg-opacity-90`
        : variant === "button-outlined"
        ? `border ${getBorderColor()} no-underline text-center inline-block rounded px-5 py-2 hover:bg-opacity-90`
        : null
    }`,
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
    underlineClass: `${
      underline === "none"
        ? "no-underline"
        : underline === "always"
        ? "underline"
        : underline === "hover" && variant === "text"
        ? "hover:underline"
        : null
    }`,
  };

  return (
    <Link href={href} legacyBehavior>
      <a className={Object.values(styles).join(" ")}>
        {text ? text : children}
      </a>
    </Link>
  );
};

export default TextLink;
