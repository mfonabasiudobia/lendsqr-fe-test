import { StyleModel } from "@/Views/Hooks/Models";
import { ReactNode } from "react";

export interface ListModel extends StyleModel {
  children?: ReactNode;
  variant?: "ul" | "div";
  childrenClassName?: string;
  alignment?: "horizontal" | "vertical";
  header?: ReactNode;
}