import { Image, Box, Rating, Text } from "@/Views/Atoms";
import NoImage from "@images/no-image.png";
import styles from "@/styles/global.module.scss";

interface ProfileCardModel {
  user: {
    accountNumber: number | string;
    accountBalance: number;
    userName: string;
    profile: {
      avatar: string;
    };
  };
}

const ProfileCard: React.FC<ProfileCardModel> = ({
  user: { accountNumber, accountBalance, userName, profile },
}) => {
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
          src={profile.avatar}
          fill={false}
          variant="circle"
          alt="Profile Image"
          width={100}
          height={100}
        />

        <Box spacingY={2}>
          <Text variant="h3" text={userName} size="lg" weight="medium" />

          <Text variant="h6" text={accountNumber} size="sm" />
        </Box>
      </Box>

      <Box spacingY={2} className="border-r-1 border-r-gray px-5">
        <Text variant="h3" text="User’s Tier" size="sm" weight="medium" />

        <Rating />
      </Box>

      <Box spacingY={2}>
        <Text
          variant="h3"
          text={`₦${accountBalance}`}
          size="lg"
          weight="medium"
        />

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
