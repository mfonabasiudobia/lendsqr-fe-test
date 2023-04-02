import { Box, Form, Button, TextLink, Text, Image } from "@/Views/Atoms";
import { TextInput } from "@/Views/Molecules";
import { routes } from "@config";
import DashboardTemplate from "@/Views/Templates/DashboardTemplate";
import Logo from "@images/logo.png";

const Home: React.FC = () => {
  return (
    <DashboardTemplate>
      <Box>
        <Image src={Logo} alt="Logo" variant="square" fill={false} />
      </Box>
    </DashboardTemplate>
  );
};

export default Home;
