import useAtomicStyle from "@/Views/Hooks/useAtomicStyle";
import { TextInputModel } from "./Models/TextInputModel";

const Button: React.FC<TextInputModel> = ({
  className,
  label,
  type = "text",
  id,
  defaultValue,
  disabled = false,
  helperText,
  placeholder,
  size = "sm",
  error,
  required = false,
}) => {
  const styles = {
    importedStyles: useAtomicStyle({ className }),
    formControl: `w-full px-3 rounded border-2 border-gray-100 text-dark  transition tracking-wider text-sm bg-white`,
    formResponsivenessClass: `${
      size === "sm"
        ? "py-2"
        : size === "xs"
        ? "py-1"
        : size === "md"
        ? "py-3"
        : size === "lg"
        ? "py-4"
        : size === "xl"
        ? "py-5"
        : "py-3"
    }`,
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={defaultValue}
        className={`${Object.values(styles).join(" ")}`}
        autoComplete="off"
        id={id}
      />
      {helperText && (
        <span className={`text-sm font-light ${error ? "text-danger" : ""}`}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Button;
