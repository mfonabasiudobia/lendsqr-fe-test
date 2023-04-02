import { Container, Box, Image } from "@/Views/Atoms";
import { AuthTemplateModel } from "./Models/AuthTemplateModel";
import Logo from "@images/logo.png";

const AuthTemplate: React.FC<AuthTemplateModel> = ({ children }) => {
  return (
    <Container variant="fixed" className="page-wrapper py-20" spacingY={16}>
      <Box>
        <Image src={Logo} alt="Logo" variant="square" fill={false} />
      </Box>
      {children}
    </Container>
  );
};

export default AuthTemplate;
