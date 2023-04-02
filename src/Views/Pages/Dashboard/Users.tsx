import {
  Box,
  Container,
  Form,
  Button,
  TextLink,
  Text,
  Image,
} from "@/Views/Atoms";
import { TextInput, List, ListItem } from "@/Views/Molecules";
import { routes } from "@config";
import DashboardTemplate from "@/Views/Templates/DashboardTemplate";
import Logo from "@images/logo.png";

const Home: React.FC = () => {
  return (
    <DashboardTemplate>
      <Container
        variant="fluid"
        padding="py-5"
        elevation="sm"
        className="flex items-center justify-between"
      >
        <Image
          src={Logo}
          alt="Logo"
          variant="square"
          fill={false}
          height={30}
        />
        <Box>Search Box</Box>
        AiOutlineBell
        <Box>
          <List alignment="horizontal">
            <ListItem
              Item={
                <TextLink
                  text="Docs"
                  href="/"
                  underline="always"
                  color="primary"
                />
              }
            />
          </List>
        </Box>
      </Container>
    </DashboardTemplate>
  );
};

export default Home;
