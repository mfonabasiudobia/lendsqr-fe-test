import { Box } from "@/Views/Atoms";
import { AuthTemplateModel } from "./Models/AuthTemplateModel";
// import Logo from "@images/logo.png";

const AuthTemplate: React.FC<AuthTemplateModel> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default AuthTemplate;
