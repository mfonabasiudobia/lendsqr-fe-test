import { Box, Drawer, IconButton } from "@/Views/Atoms";
import { MainMobileNavigationModel } from "./Models/MainMobileNavigationModel";
import { Sidebar } from "@/Views/Organisms";

const MainMobileNavigation: React.FC<MainMobileNavigationModel> = ({
  isOpen,
  closeDrawer,
}) => {
  return (
    <Drawer
      isOpen={isOpen}
      closeDrawer={closeDrawer}
      size="50vw"
      className="flex flex-col"
      customIdSuffix="main-mobile-drawer"
    >
      <Box className="px-5 pt-2 flex justify-end">
        <IconButton
          name="AiOutlineClose"
          type="ai"
          color="primary"
          size="3xl"
          onClick={closeDrawer}
        />
      </Box>
      <Box className="h-screen overflow-y-scroll">
        <Sidebar isMobile={true} />
      </Box>
    </Drawer>
  );
};

export default MainMobileNavigation;
