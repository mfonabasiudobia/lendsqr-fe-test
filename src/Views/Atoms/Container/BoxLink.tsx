import { BoxLinkModel } from "./Models/BoxLinkModel";
import useAtomicStyle from "@/Views/Hooks/useAtomicStyle";
import Link from "next/link";

const BoxLink = ({
  className,
  elevation,
  size,
  color,
  margin,
  href,
  padding,
  align,
  weight,
  spacingX,
  spacingY,
  spacing,
  children,
}: BoxLinkModel) => {
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
    <Link href={href} legacyBehavior>
      <a className={`block ${Object.values(styles).join(" ")}`}>{children}</a>
    </Link>
  );
};

export default BoxLink;
