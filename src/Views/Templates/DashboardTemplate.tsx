import { Box } from "@/Views/Atoms";
import { AuthTemplateModel } from "./Models/AuthTemplateModel";
import { MainNavigation, Sidebar } from "@/Views/Organisms";

const DashboardTemplate: React.FC<AuthTemplateModel> = ({ children }) => {
  return (
    <Box>
      <MainNavigation />
      <Box className="flex">
        <Sidebar />
        <Box padding="px-7 py-10 w-full">{children}</Box>
      </Box>
    </Box>
  );
};

export default DashboardTemplate;
