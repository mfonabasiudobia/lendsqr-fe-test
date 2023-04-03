export interface DrawerModel {
  children: React.ReactNode;
  direction?: "right" | "left" | "bottom" | "top",
  isOpen: boolean,
  className?: string,
  overlayOpacity?: number,
  overlayColor?: string,
  enableOverlay?: boolean,
  duration?: number,
  size?: string | number,
  closeDrawer?: () => void,
  customIdSuffix : any
}