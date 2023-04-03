import { Box, Text, Image } from "@/Views/Atoms";
// import { routes } from "@config";
import DashboardTemplate from "@/Views/Templates/DashboardTemplate";
import UserCircleIcon from "@svg/user-circle.svg";
import UserCircleOutlineIcon from "@svg/user-outline-circle.svg";
import CoinCircleIcon from "@svg/coin-circle.svg";
import DoubleCoinCircleIcon from "@svg/double-coin-circle.png";
import styles from "./Styles/index.module.scss";

const Home: React.FC = () => {
  return (
    <DashboardTemplate>
      <Box spacingY={5}>
        <Text
          variant="h1"
          text="Users"
          className="title"
          color="primary"
          weight="medium"
        />
        <Box className={styles["user-stats-wrapper"]} color="primary">
          <Box elevation="md" className="bg-white" padding="p-4" spacingY={2}>
            <Image src={UserCircleIcon} alt="Users Icon" fill={false} />

            <Text variant="h1" text="Users" size="sm" weight="medium" />
            <Text variant="h3" text="2,453" size="xl" weight="semibold" />
          </Box>
          <Box elevation="md" className="bg-white" padding="p-4" spacingY={2}>
            <Image src={UserCircleOutlineIcon} alt="Users Icon" fill={false} />
            <Text variant="h1" text="Active Users" size="sm" weight="medium" />
            <Text variant="h3" text="2,453" size="xl" weight="semibold" />
          </Box>
          <Box elevation="md" className="bg-white" padding="p-4" spacingY={2}>
            <Image src={CoinCircleIcon} alt="User Icon" fill={false} />
            <Text
              variant="h1"
              text="Users with Loans"
              size="sm"
              weight="medium"
            />
            <Text variant="h3" text="12,453" size="xl" weight="semibold" />
          </Box>

          <Box elevation="md" className="bg-white" padding="p-4" spacingY={2}>
            <Image src={DoubleCoinCircleIcon} alt="User Icon" fill={false} />
            <Text
              variant="h1"
              text="Users with Savings"
              size="sm"
              weight="medium"
            />
            <Text variant="h3" text="102,453" size="xl" weight="semibold" />
          </Box>
        </Box>
      </Box>
    </DashboardTemplate>
  );
};

export default Home;
