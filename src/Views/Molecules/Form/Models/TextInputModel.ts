import { StyleModel } from "@/Views/Hooks/Models";

export interface TextInputModel extends StyleModel {
    variant?: "outlined" | "filled" | "standard";
    label?: string;
    type?: "text" | "email" | "password";
    id?: string;
    defaultValue?: string | number;
    disabled?: boolean;
    helperText?: string;
    placeholder?: string;
    error?: any,
    size?:  "xs" | "sm" | "md" | "lg" | "xl";
    required?:boolean;
}