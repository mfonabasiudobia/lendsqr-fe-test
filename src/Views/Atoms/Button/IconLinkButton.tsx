import { IconLinkButtonModel } from "./Models/IconLinkButtonModel";
import useAtomicStyle from "@/Views/Hooks/useAtomicStyle";
import Link from "next/link";

const IconLinkButton: React.FC<IconLinkButtonModel> = ({
  variant,
  className,
  elevation,
  size,
  color,
  margin,
  padding,
  align,
  weight,
  name,
  type,
  href,
  onClick,
}) => {
  const getBackgroundColor = () => (color ? `bg-${color}` : null);

  const getBorderColor = () => (color ? `border-${color}` : null);

  const styles = {
    variantClass: `text-3xl cursor-pointer rounded-full inline-block p-1 ${
      variant === "contained"
        ? `${getBackgroundColor()} text-white`
        : variant === "outlined"
        ? `border ${getBorderColor()} `
        : ""
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
    }),
  };

  const getIconType = () => {
    switch (type) {
      case "ai":
        return require("react-icons/ai")[name];
      case "fa":
        return require("react-icons/fa")[name];
      case "io":
        return require("react-icons/io")[name];
      case "hi":
        return require("react-icons/hi")[name];
      case "ci":
        return require("react-icons/ci")[name];
      case "bs":
        return require("react-icons/bs")[name];
      default:
        return require("react-icons/md")[name];
    }
  };

  const Myicon = getIconType();

  return (
    <Link href={href} legacyBehavior>
      <a onClick={onClick}>
        <Myicon className={`${Object.values(styles).join(" ")}`} />
      </a>
    </Link>
  );
};

export default IconLinkButton;
