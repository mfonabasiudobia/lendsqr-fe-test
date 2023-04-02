import { ReactNode } from "react";
import { StyleModel } from "@/Views/Hooks/Models";

export interface LinkModel extends StyleModel {
  variant?: "text" | "button-contained" | "button-outlined";
  href: string;
  text?: any;
  children?: ReactNode;
  underline?: "always" | "hover" | "none";
}