import { ButtonModel } from "./Models/ButtonModel";
import useAtomicStyle from "@/Views/Hooks/useAtomicStyle";

const Button: React.FC<ButtonModel> = ({
  variant,
  type = "button",
  fullWidth = false,
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
  disabled = false,
  text,
  onClick,
  children,
}) => {
  const getBackgroundColor = () => (color ? `bg-${color}` : null);

  const getBorderColor = () => (color ? `border-${color}` : null);

  const styles = {
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
    variantClass: `text-center inline-block
    ${
      variant === "text"
        ? ""
        : variant === "contained"
        ? `${getBackgroundColor()} text-white hover:bg-opacity-90`
        : variant === "outlined"
        ? `border-1 rounded-1 ${getBorderColor()} hover:bg-opacity-90`
        : "px-5 py-2"
    }`,
    fullWidthStyle: fullWidth ? "w-full" : null,
  };

  return (
    <button
      type={type}
      className={`${Object.values(styles).join(" ")}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text ? text : children}
    </button>
  );
};

export default Button;
