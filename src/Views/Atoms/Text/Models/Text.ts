import { ReactNode } from "react";
import { StyleModel } from "@/Views/Hooks/Models";

export interface TextModel extends StyleModel {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "button" | "caption" | "span" | "section" | "button";
  text?: any;
  children?: ReactNode;
}

