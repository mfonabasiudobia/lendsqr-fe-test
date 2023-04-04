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

  // ${
  // variant === "contained"
  //   ? `${getBackgroundColor()} text-white`
  //   : variant === "outlined"
  //   ? `border ${getBorderColor()} `
  //   : ""
  // }

  const styles = {
    variantClass: `${!size ? "text-3xl" : null} cursor-pointer inline-block`,
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
      case "fi":
        return require("react-icons/fi")[name];
      case "bi":
        return require("react-icons/fi")[name];
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
    <button onClick={onClick} className={`${Object.values(styles).join(" ")}`}>
      <Myicon />
    </button>
  );
};

export default IconButton;
