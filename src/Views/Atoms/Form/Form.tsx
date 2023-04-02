import Link from "next/link";
import { FormModel } from "./Models/FormModel";
import useAtomicStyle from "@/Views/Hooks/useAtomicStyle";

const Form: React.FC<FormModel> = ({
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
  onSubmit,
  children,
}) => {
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
  };

  return (
    <form
      onSubmit={onSubmit}
      autoComplete="off"
      className={`${Object.values(styles).join(" ")}`}
    >
      {children}
    </form>
  );
};

export default Form;
