import { ImageModel } from "./Models/Image";
import useAtomicStyle from "@/Views/Hooks/useAtomicStyle";
import Image from "next/image";

const Avatar: React.FC<ImageModel> = ({
  className,
  variant = "square",
  elevation,
  margin,
  padding,
  alt,
  src,
  objectFit = "contain",
  fill = false,
  width = 0,
  height = 0,
}) => {
  const styles = {
    importedStyles: useAtomicStyle({ margin, padding, className, elevation }),
    variantClass: `${
      variant === "circle"
        ? "rounded-full"
        : variant === "square"
        ? `rounded-0`
        : variant === "rounded"
        ? "rounded"
        : null
    }`,
    objectFit: objectFit ? `object-${objectFit}` : null,
  };

  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      priority={true}
      height={height}
      fill={fill}
      className={`inline-block ${Object.values(styles).join(" ")}`}
    />
  );
};

export default Avatar;
