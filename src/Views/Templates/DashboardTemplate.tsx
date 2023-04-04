import { useState } from "react";
import { Box, IconButton, Button } from "@/Views/Atoms";
import { AuthTemplateModel } from "./Models/AuthTemplateModel";
import {
  MainNavigation,
  Sidebar,
  MainMobileNavigation,
} from "@/Views/Organisms";
import styles from "@/Views/Organisms/Sidebar/Styles/index.module.scss";

const DashboardTemplate: React.FC<AuthTemplateModel> = ({ children }) => {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
  const [toggleSearchDrawer, setToggleSearchDrawer] = useState<boolean>(false);

  const handleToggleDrawerNavigation = () => setToggleDrawer((prev) => !prev);

  const handleRoggleSearchDrawer = () => setToggleSearchDrawer((prev) => !prev);

  return (
    <Box>
      <MainNavigation />
      <Box className="flex relative">
        <Sidebar isMobile={false} />
        <MainMobileNavigation
          isOpen={toggleDrawer}
          closeDrawer={handleToggleDrawerNavigation}
        />

        <IconButton
          name="BsChevronRight"
          type="bs"
          color="primary"
          elevation="xl"
          weight="bold"
          onClick={handleToggleDrawerNavigation}
          className={`pl-5 rounded-r-full pt-2 w-14 h-14 bg-white absolute -left-7 top-0 z-20 ${styles["responsive-toggle-sidebar-btn"]}`}
        />

        <Box padding="px-7 py-10 w-full overflow-hidden">{children}</Box>
      </Box>
    </Box>
  );
};

export default DashboardTemplate;
