import { ReactNode } from "react";
import { StyleModel } from "@/Views/Hooks/Models";

export interface FormModel extends StyleModel {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  children?: ReactNode;
}