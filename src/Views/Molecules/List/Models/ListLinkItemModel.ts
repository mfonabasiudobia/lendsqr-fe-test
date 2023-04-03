import { ReactNode } from "react";
import { StyleModel } from "@/Views/Hooks/Models";

export interface ListLinkItemModel extends StyleModel {
  LeftItem?: ReactNode;
  RightItem?: ReactNode;
  href: string;
  Item?: ReactNode;
};