import {
  Box,
  Container,
  Dropdown,
  IconButton,
  TextLink,
  Text,
  Image,
} from "@/Views/Atoms";
import { List, ListItem, Search } from "@/Views/Molecules";
import Logo from "@images/logo.png";
import Profile1 from "@images/profile/profile1.png";
import styles from "@/styles/global.module.scss";

const MainNavigation: React.FC = () => {
  return (
    <Container
      variant="fluid"
      padding="py-5"
      elevation="sm"
      className="flex items-center justify-between sticky top-0 bg-white z-50"
    >
      <TextLink href="/">
        <Image
          src={Logo}
          alt="Logo"
          variant="square"
          fill={false}
          height={25}
        />
      </TextLink>
      <Search />

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
                    <Text
                      variant="span"
                      text="Adedeji"
                      weight="medium"
                      className={styles["hide-from-mobile"]}
                    />
                    <IconButton size="sm" name="AiFillCaretDown" type="ai" />
                  </Box>
                }
                className="left-5 top-10 bg-white shadow-xl text-sm rounded-1 inline-block py-2"
              >
                <List childrenClassName="px-3 py-1 text-xs text-primary">
                  {[
                    {
                      icon_name: "MdOutlineDashboard",
                      icon_type: "md",
                      title: "Dashboard",
                    },
                    {
                      icon_name: "AiOutlineSetting",
                      icon_type: "ai",
                      title: "Settings",
                    },
                    {
                      icon_name: "MdDarkMode",
                      icon_type: "md",
                      title: "Dark Mode",
                    },
                    {
                      icon_name: "AiOutlineLogout",
                      icon_type: "ai",
                      title: "Logout",
                    },
                  ].map((item, index) => (
                    <ListItem
                      spacingX={2}
                      LeftItem={
                        <IconButton
                          size="xs"
                          name={item.icon_name}
                          type={item.icon_type}
                          className="block"
                        />
                      }
                      Item={<Text variant="h2" text={item.title} />}
                    />
                  ))}
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
