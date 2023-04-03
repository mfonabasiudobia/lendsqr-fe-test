import Drawer from "react-modern-drawer";
import { DrawerModel } from "./Models/DrawerModel";

const DrawerComponent: React.FC<DrawerModel> = ({
  children,
  direction = "left",
  isOpen = false,
  className,
  overlayOpacity,
  overlayColor,
  enableOverlay,
  duration = 300,
  size = 250,
  customIdSuffix,
  closeDrawer,
}) => {
  return (
    <Drawer
      customIdSuffix={customIdSuffix}
      open={isOpen}
      onClose={closeDrawer}
      enableOverlay={enableOverlay}
      overlayColor={overlayColor}
      overlayOpacity={overlayOpacity}
      direction={direction}
      size={size}
      duration={duration}
      className={className}
    >
      {children}
    </Drawer>
  );
};

export default DrawerComponent;
