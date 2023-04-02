import { Fragment } from "react";
import { ListItemModel } from "./Models/ListItemModel";
import useAtomicStyle from "@/Views/Hooks/useAtomicStyle";

const ListItem: React.FC<ListItemModel> = ({
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
  RightItem,
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
    <li
      className={`${Object.values(styles).join(
        " "
      )} flex items-center space-x-4`}
    >
      {LeftItem && LeftItem}
      {Item && Item}
      {RightItem && RightItem}
    </li>
  );
};

export default ListItem;
