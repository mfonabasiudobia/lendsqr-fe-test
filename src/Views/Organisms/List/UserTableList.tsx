import { Text, IconButton, Dropdown, Button, Box } from "@/Views/Atoms";
import { List, ListItem } from "@/Views/Molecules";
import Moment from "react-moment";
import moment from "moment";

interface UserTableListModel {
  users: [];
}

const UserTableList: React.FC<UserTableListModel> = ({ users }) => {
  const getStatusButton = (date: string) => {
    const currentDate = moment();
    const dateToCheck = moment(date);
    const threeYearsFromNow = moment().add(3, "years");
    const threeMonthsFromNow = moment().add(3, "month");

    return (
      <Button
        variant="text"
        text={
          dateToCheck.isAfter(currentDate)
            ? "Success"
            : dateToCheck.isBefore(threeYearsFromNow)
            ? "Inactive"
            : dateToCheck.isBefore(threeMonthsFromNow)
            ? "Pending"
            : "Blacklisted"
        }
        className={`rounded-10 ${
          dateToCheck.isAfter(currentDate)
            ? " success-btn "
            : dateToCheck.isBefore(threeYearsFromNow)
            ? "inactive-btn"
            : dateToCheck.isBefore(threeMonthsFromNow)
            ? "pending-btn"
            : "blacklisted-btn"
        } px-5 `}
      />
    );
  };

  const hanleActionButton = () => {
    return (
      <Dropdown
        Item={<IconButton type="bs" name="BsThreeDotsVertical" size="md" />}
        elevation="md"
        className="-left-28 top-0 z-50 bg-white rounded-2"
      >
        <List childrenClassName="px-4 py-3 text-sm font-medium hover:bg-gray cursor-pointer">
          {[
            {
              button_type: "ai",
              button_name: "AiOutlineEye",
              title: "View Details",
            },
            {
              button_type: "fi",
              button_name: "FiUserX",
              title: "Blacklist User",
            },
            {
              button_type: "fi",
              button_name: "FiUserCheck",
              title: "Activate User",
            },
          ].map((item: any, index) => (
            <ListItem
              key={index}
              spacingX={2}
              LeftItem={
                <IconButton
                  type={item.button_type}
                  className="inline-block"
                  color="primary"
                  name={item.button_name}
                  size="md"
                />
              }
              Item={<Text text={item.title} />}
            />
          ))}
        </List>
      </Dropdown>
    );
  };

  return (
    <Box
      className="table-container"
      color="primary"
      padding="p-4"
      elevation="md"
    >
      <table>
        <thead>
          <tr className="font-semibold">
            <th>ORGANIZATION</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>PHONE NUMBER</th>
            <th>DATE JOINED</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.slice(0, 9).map((item: any, index) => (
            <tr key={index}>
              <td>{item.orgName}</td>
              <td>{item.userName}</td>
              <td>{item.email}</td>
              <td>{item.phoneNumber}</td>
              <td>
                <Moment date={item.createdAt} format="MMM d, YYYY hh:mm A" />
              </td>
              <td>{getStatusButton(item.lastActiveDate)}</td>
              <td>{hanleActionButton()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default UserTableList;
