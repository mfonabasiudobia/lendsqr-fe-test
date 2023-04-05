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
          className={`py-1 bg-white rounded-r-5 fixed -left-1 top-1/5 z-20 ${styles["responsive-toggle-sidebar-btn"]}`}
        />

        <Box padding="px-7 py-10 w-full overflow-hidden">{children}</Box>
      </Box>
    </Box>
  );
};

export default DashboardTemplate;
