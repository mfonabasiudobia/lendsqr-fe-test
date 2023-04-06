import { ReactNode } from "react";
import { StyleModel } from "@/Views/Hooks/Models";

export interface ButtonModel extends StyleModel {
  variant: "text" | "contained" | "outlined";
  text?: any;
  fullWidth?: boolean,
  type?: "button" | "submit",
  children?: ReactNode;
  disabled? : boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}