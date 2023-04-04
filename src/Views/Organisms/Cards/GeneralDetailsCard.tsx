import { Box, Text, Divider } from "@/Views/Atoms";
import styles from "@/styles/global.module.scss";

const GeneralDetailsCard: React.FC = () => {
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
            { tittle: "FULL NAME", value: "Grace Effiom" },
            { tittle: "PHONE NUMBER", value: "07060780922" },
            { tittle: "EMAIL ADDRESS", value: "grace@gmail.com" },
            { tittle: "BVN", value: "07060780922" },
            { tittle: "GENDER", value: "Female" },
            { tittle: "MARITAL STATUS", value: "Single" },
            { tittle: "CHILDREN", value: "None" },
            { tittle: "TYPE OF RESIDENCE", value: "Parent’s Apartment" },
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
            { tittle: "LEVEL OF EDUCATION", value: "B.Sc" },
            { tittle: "EMPLOYMENT STATUS", value: "Employed" },
            { tittle: "SECTOR OF EMPLOYMENT", value: "FinTech" },
            { tittle: "DURATION OF EMPLOYMENT", value: "2 years" },
            { tittle: "OFFICE EMAIL", value: "grace@lendsqr.com" },
            { tittle: "MONTHLY INCOME", value: "₦200,000.00- ₦400,000.00" },
            { tittle: "LOAN REPAYMENT", value: "40,000" },
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
            { tittle: "TWITTER", value: "@grace_effiom" },
            { tittle: "FACEBOOK", value: "Grace Effiom" },
            { tittle: "INSTAGRAM", value: "@grace_effiom" },
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
        <Text variant="h3" text="Guarantor" color="primary" weight="medium" />

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
