import { Box, Form, Button, TextLink, Text, Image } from "@/Views/Atoms";
import { TextInput } from "@/Views/Molecules";
import { routes } from "@config";
import PabloSignIn from "@svg/pablo-sign-in.svg";
import AuthTemplate from "@/Views/Templates/AuthTemplate";
import style from "./Styles/HomeStyle.module.scss";

const Home: React.FC = () => {
  return (
    <AuthTemplate>
      <Box className={`${style["login-wrapper"]}`}>
        <Box className="relative">
          <Image
            src={PabloSignIn}
            alt="Sign In Image"
            variant="square"
            fill={true}
          />
        </Box>
        <Box spacingY={6}>
          <Box spacingY={1}>
            <Text
              variant="h2"
              text="Welcome!"
              color="primary"
              className="title"
              weight="extrabold"
            />
            <Text
              variant="p"
              text="Enter details to login."
              className="subtitle"
              color="secondary"
            />
          </Box>
          <Form spacingY={4}>
            <TextInput size="md" className="text-sm" placeholder="Email" />

            <TextInput
              size="md"
              className="text-sm"
              type="password"
              placeholder="Password"
            />

            <Box>
              <TextLink
                href={routes.forgot_password}
                size="xs"
                color="accent"
                weight="medium"
                text="FORGOT PASSWORD?"
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="sm"
              padding="py-3"
              text="LOG IN"
              color="white"
              className="bg-accent"
            />
          </Form>
        </Box>
      </Box>
    </AuthTemplate>
  );
};

export default Home;
