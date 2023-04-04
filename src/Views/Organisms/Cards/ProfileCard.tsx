import { Image, Box, Rating, Text } from "@/Views/Atoms";
import NoImage from "@images/no-image.png";
import styles from "@/styles/global.module.scss";

const ProfileCard: React.FC = () => {
  return (
    <Box
      spacingX={5}
      className={styles["user-detail-basic-info-wrapper"]}
      color="primary"
    >
      <Box
        spacingX={4}
        className="border-r-1 border-r-gray pr-5 flex items-center"
      >
        <Image
          src={NoImage}
          fill={false}
          alt="Profile Image"
          width={100}
          height={100}
        />

        <Box spacingY={2}>
          <Text variant="h3" text="Grace Effiom" size="lg" weight="medium" />

          <Text variant="h6" text="LSQFf587g90" size="sm" />
        </Box>
      </Box>

      <Box spacingY={2} className="border-r-1 border-r-gray px-5">
        <Text variant="h3" text="User’s Tier" size="sm" weight="medium" />

        <Rating />
      </Box>

      <Box spacingY={2}>
        <Text variant="h3" text="₦200,000.00" size="lg" weight="medium" />

        <Text
          variant="h6"
          text="9912345678/Providus Bank"
          size="xs"
          weight="medium"
        />
      </Box>
    </Box>
  );
};

export default ProfileCard;
