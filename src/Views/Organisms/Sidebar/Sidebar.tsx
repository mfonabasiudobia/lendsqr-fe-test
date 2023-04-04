import { Box, Text, Image, Divider } from "@/Views/Atoms";
import { List, ListItem, ListLinkItem } from "@/Views/Molecules";

import UserFriends from "@svg/user-friends.svg";
import Users from "@svg/users.svg";
import Sack from "@svg/sack.svg";
import Handshake from "@svg/handshake-regular.svg";
import PiggyBank from "@svg/piggy-bank.svg";
import Loan from "@svg/loan.svg";
import UserCheck from "@svg/user-check.svg";
import UserTimes from "@svg/user-times.svg";
import HomeIcon from "@svg/home.svg";
import BriefcaseIcon from "@svg/briefcase.svg";
import SavingsIcon from "@svg/np_bank.svg";
import TransactionIcon from "@svg/transaction.svg";
import CoinIcon from "@svg/coins-solid.svg";
import GalaxyIcon from "@svg/galaxy.svg";
import UserCogIcon from "@svg/user-cog.svg";
import ScrollIcon from "@svg/scroll.svg";
import ChartBarIcon from "@svg/chart-bar.svg";
import SliderIcon from "@svg/sliders-h.svg";
import BadgePercentIcon from "@svg/badge-percent.svg";
import ClipboardListIcon from "@svg/clipboard-list.svg";
import LogoutIcon from "@svg/sign-out.svg";
import TireIcon from "@svg/tire.svg";
import { SidebarModel } from "./Models/SidebarModel";
import styles from "./Styles/index.module.scss";

const Sidebar: React.FC<SidebarModel> = ({ isMobile }) => {
  const getStyle = (isActive: boolean) => {
    if (isActive)
      return "px-7 py-2 space-x-3 whitespace-nowrap  bg-accent-light border-l-4 border-l-accent text-primary font-medium";

    return "px-7 py-2 space-x-3  whitespace-nowrap text-secondary hover:bg-accent-light hover:border-l-4 hover:border-l-accent hover:text-primary";
  };

  return (
    <Box
      className={`${
        isMobile ? "w-full" : styles["responsive-sidebar-wrapper"]
      }`}
      padding="py-5"
      elevation="md"
      spacingY={7}
    >
      <ListLinkItem
        href="/"
        className={getStyle(false)}
        LeftItem={<Image src={HomeIcon} alt="Dashboard Icon" fill={false} />}
        Item={<Text text="Dashboard" />}
      />

      <List
        spacingY={2}
        header={
          <Text
            text="CUSTOMERS"
            variant="h2"
            weight="medium"
            size="xs"
            className="px-7 text-primary"
          />
        }
      >
        <ListLinkItem
          href="/"
          className={getStyle(true)}
          LeftItem={
            <Image src={UserFriends} alt="User Friends Icon" fill={false} />
          }
          Item={<Text text="Users" />}
        />
        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={<Image src={Users} alt="User Friends Icon" fill={false} />}
          Item={<Text text="Guarantors" />}
        />
        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={<Image src={Sack} alt="Sack Icon" fill={false} />}
          Item={<Text text="Loans" />}
        />
        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={<Image src={Handshake} alt="Decision Icon" fill={false} />}
          Item={<Text text="Decision Models" />}
        />
        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={<Image src={PiggyBank} alt="Savings Icon" fill={false} />}
          Item={<Text text="Savings" />}
        />
        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={<Image src={Loan} alt="Loan Requests Icon" fill={false} />}
          Item={<Text text="Loan Requests" />}
        />

        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={
            <Image src={UserCheck} alt="User Check Icon" fill={false} />
          }
          Item={<Text text="User Check" />}
        />
        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={
            <Image src={UserTimes} alt="User Times Icon" fill={false} />
          }
          Item={<Text text="User Times" />}
        />
      </List>

      <List
        spacingY={2}
        header={
          <Text
            text="BUSINESSES"
            variant="h2"
            weight="medium"
            size="xs"
            className="px-7 text-primary"
          />
        }
      >
        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={
            <Image src={BriefcaseIcon} alt="Briefcase Icon" fill={false} />
          }
          Item={<Text text="Organization" />}
        />
        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={<Image src={Loan} alt="Loan Product Icon" fill={false} />}
          Item={<Text text="Loan Products" />}
        />
        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={
            <Image src={SavingsIcon} alt="Savings Products Icon" fill={false} />
          }
          Item={<Text text="Savings Products" />}
        />
        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={
            <Image src={CoinIcon} alt="Fees and Charges Icon" fill={false} />
          }
          Item={<Text text="Fees and Charges" />}
        />
        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={
            <Image src={TransactionIcon} alt="Transactions Icon" fill={false} />
          }
          Item={<Text text="Transactions" />}
        />
        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={<Image src={GalaxyIcon} alt="Services Icon" fill={false} />}
          Item={<Text text="Services" />}
        />
        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={
            <Image src={UserCogIcon} alt="Service Account Icon" fill={false} />
          }
          Item={<Text text="Service Account" />}
        />

        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={
            <Image src={ScrollIcon} alt="Settlements Icon" fill={false} />
          }
          Item={<Text text="Settlements" />}
        />
        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={
            <Image src={ChartBarIcon} alt="Reports Icon" fill={false} />
          }
          Item={<Text text="Reports" />}
        />
      </List>

      <List
        spacingY={2}
        childrenClassName={getStyle(false)}
        header={
          <Text
            text="SETTINGS"
            variant="h2"
            weight="medium"
            size="xs"
            className="px-7 text-primary"
          />
        }
      >
        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={
            <Image src={SliderIcon} alt="Preferences Icon" fill={false} />
          }
          Item={<Text text="Preferences" />}
        />
        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={
            <Image
              src={BadgePercentIcon}
              alt="Fees and Pricing Icon"
              fill={false}
            />
          }
          Item={<Text text="Fees and Pricing" />}
        />

        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={
            <Image src={ClipboardListIcon} alt="Audit Logs Icon" fill={false} />
          }
          Item={<Text text="Audit Logs" />}
        />
        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={
            <Image src={TireIcon} alt="Systems Messages Icon" fill={false} />
          }
          Item={<Text text="Systems Messages" />}
        />
      </List>

      <Divider />

      <List childrenClassName={getStyle(false)} spacingY={3}>
        <ListLinkItem
          href="/"
          className={getStyle(false)}
          LeftItem={<Image src={LogoutIcon} alt="Logout Icon" fill={false} />}
          Item={<Text text="Logout" />}
        />

        <ListItem Item={<Text text="v1.2.0" size="xs" />} />
      </List>
    </Box>
  );
};

export default Sidebar;
