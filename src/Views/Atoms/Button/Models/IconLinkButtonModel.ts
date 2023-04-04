import { ReactNode } from "react";
import { StyleModel } from "@/Views/Hooks/Models";

export interface IconLinkButtonModel extends StyleModel {
  variant?: "contained" | "outlined" | undefined;
  name: string;
  href: string;
  type: "ai" | "bs" | "hi" | "fi" | "bi" | "fa" | "md" | "io" | "ci";
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}