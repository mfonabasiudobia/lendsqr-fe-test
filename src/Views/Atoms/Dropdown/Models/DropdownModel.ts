        import { ReactNode } from "react";
import { StyleModel } from "@/Views/Hooks/Models";

export interface DropdownModel extends StyleModel {
  Item: ReactNode;
  children?: ReactNode;
}