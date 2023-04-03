import {
  Box,
  Container,
  Dropdown,
  IconButton,
  TextLink,
  Text,
  Image,
} from "@/Views/Atoms";
import { List, ListItem } from "@/Views/Molecules";
import Logo from "@images/logo.png";
import Profile1 from "@images/profile/profile1.png";

const MainNavigation: React.FC = () => {
  return (
    <Container
      variant="fluid"
      padding="py-5"
      elevation="sm"
      className="flex items-center justify-between"
    >
      <Image src={Logo} alt="Logo" variant="square" fill={false} height={30} />

      <Box>Search Box</Box>

      <Box>
        <List alignment="horizontal" spacingX={5}>
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

          <ListItem
            Item={<IconButton color="primary" name="AiOutlineBell" type="ai" />}
          />

          <ListItem
            Item={
              <Dropdown
                Item={
                  <Box
                    className="flex items-center"
                    spacingX={2}
                    color="primary"
                  >
                    <Image
                      src={Profile1}
                      alt="Profile Picture"
                      variant="circle"
                      fill={false}
                      height={40}
                    />
                    <Text variant="span" text="MfonAbasi" weight="medium" />
                    <IconButton size="xl" name="AiFillCaretDown" type="ai" />
                  </Box>
                }
                className="left-2 top-10 bg-white shadow-xl text-sm rounded inline-block py-2"
              >
                <List childrenClassName="pl-1 pr-4 py-1 text-xs text-primary">
                  <ListItem
                    LeftItem={
                      <IconButton
                        size="xl"
                        name="MdOutlineDashboard"
                        type="md"
                        className="block"
                      />
                    }
                    Item={<Text variant="span" text="Dashboard" />}
                  />

                  <ListItem
                    LeftItem={
                      <IconButton
                        size="xl"
                        name="AiOutlineSetting"
                        type="ai"
                        className="block"
                      />
                    }
                    Item={<Text variant="span" text="Settings" />}
                  />

                  <ListItem
                    LeftItem={
                      <IconButton
                        size="xl"
                        name="MdDarkMode"
                        type="md"
                        className="block"
                      />
                    }
                    Item={<Text variant="span" text="Dark Mode" />}
                  />

                  <ListItem
                    LeftItem={
                      <IconButton
                        size="xl"
                        name="AiOutlineLogout"
                        type="ai"
                        className="block"
                      />
                    }
                    Item={<Text variant="span" text="Logout" />}
                  />
                </List>
              </Dropdown>
            }
          />
        </List>
      </Box>
    </Container>
  );
};

export default MainNavigation;
