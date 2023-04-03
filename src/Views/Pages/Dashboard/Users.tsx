import { Box, Text } from "@/Views/Atoms";
// import { routes } from "@config";
import DashboardTemplate from "@/Views/Templates/DashboardTemplate";

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
        <Box className="grid grid-cols-4" spacingX={5}>
          <Box elevation="lg" className="bg-white" padding="p-3" spacingY={2}>
            <Text variant="h1" text="Users" size="sm" weight="normal" />
            <Text variant="h3" text="2,453" size="lg" weight="semibold" />
          </Box>

          <Box elevation="lg" className="bg-white" padding="p-3" spacingY={2}>
            <Text variant="h1" text="Active Users" size="sm" weight="normal" />
            <Text variant="h3" text="2,453" size="lg" weight="semibold" />
          </Box>

          <Box elevation="lg" className="bg-white" padding="p-3" spacingY={2}>
            <Text
              variant="h1"
              text="Users with Loans"
              size="sm"
              weight="normal"
            />
            <Text variant="h3" text="12,453" size="lg" weight="semibold" />
          </Box>

          <Box elevation="lg" className="bg-white" padding="p-3" spacingY={2}>
            <Text
              variant="h1"
              text="Users with Savings"
              size="sm"
              weight="normal"
            />
            <Text variant="h3" text="102,453" size="lg" weight="semibold" />
          </Box>
        </Box>
      </Box>
    </DashboardTemplate>
  );
};

export default Home;
