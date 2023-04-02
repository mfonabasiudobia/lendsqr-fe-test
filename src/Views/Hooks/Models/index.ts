export interface StyleModel {
  size?: "base" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
  margin?: string;
  padding?: string;
  align?: "left" | "right" | "center" | "justify";
  weight?: "normal" | "light" | "thin" | "extralight" | "medium" | "semibold" | "extrabold" | "bold" | "black";
  spacingX?: number;
  spacingY?: number;
  spacing?: number;
  className?: string;
  elevation?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  color?: "primary" | "dark" | "light" | "secondary" | "danger" | "success" | "white" | "accent";
}