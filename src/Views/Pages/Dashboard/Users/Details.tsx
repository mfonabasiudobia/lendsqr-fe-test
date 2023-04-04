import { Box, Text, Button, BackLink } from "@/Views/Atoms";
import { ProfileCard, GeneralDetailsCard } from "@/Views/Organisms";
import DashboardTemplate from "@/Views/Templates/DashboardTemplate";
import styles from "@/styles/global.module.scss";

interface UserDetailsModel {
  user: object;
}

const UserDetails: React.FC<UserDetailsModel> = ({ user }) => {
  return (
    <DashboardTemplate>
      <Box spacingY={5}>
        <BackLink text="Back to Users" href="/dashboard/users" />
        <Box className={styles["user-details-top-wrapper"]}>
          <Text
            variant="h1"
            text="User Details"
            className="dashboard-title"
            color="primary"
            weight="medium"
          />

          <Box spacingX={2}>
            <Button
              variant="outlined"
              weight="medium"
              color="danger"
              size="sm"
              text="BLACKLIST USER"
              className="hover:bg-danger hover:text-white"
            />
            <Button
              variant="outlined"
              weight="medium"
              color="accent"
              size="sm"
              text="ACTIVATE USER"
              className="hover:bg-accent hover:text-white"
            />
          </Box>
        </Box>

        <Box elevation="md" padding="px-5 pt-8" spacingY={7}>
          <ProfileCard user={user} />
          <Box className="overflow-auto flex items-center">
            {[
              "General Details",
              "Documents",
              "Bank Details",
              "Loans",
              "Savings",
              "App and System",
            ].map((item, index) => (
              <Button
                variant="text"
                text={item}
                key={index}
                className={`whitespace-nowrap ${
                  index === 0
                    ? "border-b-2 text-accent border-b-accent"
                    : "hover:text-accent "
                }`}
              />
            ))}
          </Box>
        </Box>

        <Box elevation="md" padding="px-5 py-8" spacingY={7}>
          <GeneralDetailsCard user={user} />
        </Box>
      </Box>
    </DashboardTemplate>
  );
};

export default UserDetails;
