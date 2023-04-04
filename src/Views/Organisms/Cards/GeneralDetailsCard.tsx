import { Box, Text, Divider, TextLink } from "@/Views/Atoms";
import styles from "@/styles/global.module.scss";

interface GeneralDetailsModel {
  user: {
    profile: {
      firstName: string;
      lastName: string;
      phoneNumber: string;
      bvn: string;
      gender: string;
      address: string;
    };
    guarantor: {
      firstName: string;
      lastName: string;
      phoneNumber: string;
    };
    socials: {
      twitter: string;
      facebook: string;
      instagram: string;
    };
    education: {
      level: string;
      employmentStatus: string;
      sector: string;
      duration: string;
      officeEmail: string;
      monthlyIncome: [];
      loanRepayment: number;
    };
    email: string;
  };
}

const GeneralDetailsCard: React.FC<GeneralDetailsModel> = ({
  user: { email, profile, guarantor, socials, education },
}) => {
  return (
    <>
      <Box spacingY={5}>
        <Text
          variant="h3"
          text="Personal Information"
          color="primary"
          weight="medium"
        />

        <Box
          className={`grid grid-cols-5 ${styles["user-details-information-wrapper"]} gap-7`}
        >
          {[
            {
              tittle: "FULL NAME",
              value: `${profile.firstName} ${profile.lastName}`,
            },
            { tittle: "PHONE NUMBER", value: profile.phoneNumber },
            { tittle: "EMAIL ADDRESS", value: email },
            { tittle: "BVN", value: profile.bvn },
            { tittle: "GENDER", value: profile.gender },
            { tittle: "MARITAL STATUS", value: "Single" },
            { tittle: "CHILDREN", value: "None" },
            { tittle: "TYPE OF RESIDENCE", value: profile.address },
          ].map(({ tittle, value }, index) => {
            return (
              <Box spacingY={2} key={index}>
                <Text variant="h3" text={tittle} color="secondary" size="xs" />
                <Text
                  variant="p"
                  text={value}
                  color="secondary"
                  weight="medium"
                />
              </Box>
            );
          })}
        </Box>
      </Box>

      <Divider />

      <Box spacingY={5}>
        <Text
          variant="h3"
          text="Education and Employment"
          color="primary"
          weight="medium"
        />

        <Box
          className={`grid grid-cols-4 ${styles["user-details-information-wrapper"]} gap-7`}
        >
          {[
            { tittle: "LEVEL OF EDUCATION", value: education.level },
            { tittle: "EMPLOYMENT STATUS", value: education.employmentStatus },
            {
              tittle: "SECTOR OF EMPLOYMENT",
              value: education.sector,
            },
            { tittle: "DURATION OF EMPLOYMENT", value: education.duration },
            { tittle: "OFFICE EMAIL", value: education.officeEmail },
            {
              tittle: "MONTHLY INCOME",
              value: education.monthlyIncome.join(" - "),
            },
            { tittle: "LOAN REPAYMENT", value: education.loanRepayment },
          ].map(({ tittle, value }, index) => {
            return (
              <Box spacingY={2} key={index}>
                <Text variant="h3" text={tittle} color="secondary" size="xs" />
                <Text
                  variant="p"
                  text={value}
                  color="secondary"
                  weight="medium"
                />
              </Box>
            );
          })}
        </Box>
      </Box>

      <Divider />

      <Box spacingY={5}>
        <Text variant="h3" text="Socials" color="primary" weight="medium" />

        <Box className="grid grid-cols-4 gap-7">
          {[
            {
              tittle: "TWITTER",
              value: socials.twitter,
              link: "https://twitter.com",
            },
            {
              tittle: "FACEBOOK",
              value: socials.facebook,
              link: "https://facebook.com",
            },
            {
              tittle: "INSTAGRAM",
              value: socials.instagram,
              link: "https://instagram.com",
            },
          ].map(({ tittle, value, link }, index) => {
            return (
              <Box spacingY={2} key={index}>
                <Text variant="h3" text={tittle} color="secondary" size="xs" />
                <TextLink
                  href={`${link}/${value}`}
                  text={value}
                  underline="hover"
                  color="secondary"
                  weight="medium"
                />
              </Box>
            );
          })}
        </Box>
      </Box>

      <Divider />

      <Box spacingY={5}>
        <Text variant="h3" text="Guarantor" color="primary" weight="medium" />

        <Box
          className={`grid grid-cols-5 ${styles["user-details-information-wrapper"]} gap-7`}
        >
          {[
            {
              tittle: "FULL NAME",
              value: `${guarantor.firstName} ${guarantor.lastName}`,
            },
            { tittle: "PHONE NUMBER", value: guarantor.phoneNumber },
            { tittle: "EMAIL ADDRESS", value: "debby@gmail.com" },
            { tittle: "RELATIONSHIP", value: "Sister" },
          ].map(({ tittle, value }, index) => {
            return (
              <Box spacingY={2} key={index}>
                <Text variant="h3" text={tittle} color="secondary" size="xs" />
                <Text
                  variant="p"
                  text={value}
                  color="secondary"
                  weight="medium"
                />
              </Box>
            );
          })}
        </Box>
      </Box>

      <Divider />

      <Box spacingY={5}>
        <Text variant="h3" text="Next of Kin" color="primary" weight="medium" />

        <Box
          className={`grid grid-cols-5 ${styles["user-details-information-wrapper"]} gap-7`}
        >
          {[
            { tittle: "FULL NAME", value: "Debby Ogana" },
            { tittle: "PHONE NUMBER", value: "07060780922" },
            { tittle: "EMAIL ADDRESS", value: "debby@gmail.com" },
            { tittle: "RELATIONSHIP", value: "Sister" },
          ].map(({ tittle, value }, index) => {
            return (
              <Box spacingY={2} key={index}>
                <Text variant="h3" text={tittle} color="secondary" size="xs" />
                <Text
                  variant="p"
                  text={value}
                  color="secondary"
                  weight="medium"
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default GeneralDetailsCard;
