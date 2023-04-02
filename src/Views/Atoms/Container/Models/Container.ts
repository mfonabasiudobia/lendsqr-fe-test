import { ReactNode } from "react";
import { StyleModel } from "@/Views/Hooks/Models";

export interface ContainerModel extends StyleModel {
  variant: "fixed" | "fluid";
  children?: ReactNode;
}