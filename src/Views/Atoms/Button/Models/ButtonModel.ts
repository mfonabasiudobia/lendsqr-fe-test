import { ReactNode } from "react";
import { StyleModel } from "@/Views/Hooks/Models";

export interface ButtonModel extends StyleModel {
  variant: "text" | "contained" | "outlined";
  text?: any;
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}