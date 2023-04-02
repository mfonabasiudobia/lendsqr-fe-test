import { ContainerModel } from "./Models/Container";
import useAtomicStyle from "@/Views/Hooks/useAtomicStyle";
import ContainerStyle from "./Styles/ContainerStyle.module.scss";

const Container = ({
  className,
  variant,
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
  children,
}: ContainerModel) => {
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
    variantClass: `${
      variant === "fluid"
        ? ContainerStyle.containerFluid
        : variant === "fixed"
        ? ContainerStyle.container
        : null
    }`,
  };

  return (
    <div className={`w-full ${Object.values(styles).join(" ")}`}>
      {children}
    </div>
  );
};

export default Container;
