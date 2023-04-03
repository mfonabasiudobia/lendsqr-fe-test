import { ReactNode } from "react";
import { StyleModel } from "@/Views/Hooks/Models";
import { StaticImageData } from "next/image";


export interface ImageModel extends StyleModel {
  variant?: "circle" | "square" | "rounded";
  alt: string;
  src: string | StaticImageData;
  fill: boolean,
  objectFit?: "fill" | "cover" | "contain",
  width?: number,
  height?: number
}