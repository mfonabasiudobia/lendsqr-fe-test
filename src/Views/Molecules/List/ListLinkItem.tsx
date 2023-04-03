import { ListLinkItemModel } from "./Models/ListLinkItemModel";
import useAtomicStyle from "@/Views/Hooks/useAtomicStyle";
import Link from "next/link";

const ListLinkItem: React.FC<ListLinkItemModel> = ({
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
  LeftItem,
  Item,
  href,
  RightItem,
}) => {
  const styles = {
    importedStyles: useAtomicStyle({
      size,
      color,
      margin,
      // padding,
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
      <a className={`${Object.values(styles).join(" ")} flex items-center`}>
        {LeftItem && LeftItem}
        {Item && Item}
        {RightItem && RightItem}
      </a>
    </Link>
  );
};

export default ListLinkItem;
