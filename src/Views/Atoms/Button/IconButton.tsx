import { IconButtonModel } from "./Models/IconButtonModel";
import useAtomicStyle from "@/Views/Hooks/useAtomicStyle";

const IconButton: React.FC<IconButtonModel> = ({
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
  onClick,
}) => {
  const getBackgroundColor = () => (color ? `bg-${color}` : null);

  const getBorderColor = () => (color ? `border-${color}` : null);

  const styles = {
    variantClass: `${
      !size ? "text-3xl" : null
    } cursor-pointer rounded-full inline-block  ${
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
    <button onClick={onClick}>
      <Myicon className={`${Object.values(styles).join(" ")}`} />
    </button>
  );
};

export default IconButton;
