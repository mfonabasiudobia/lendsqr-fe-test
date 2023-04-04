import { Text, IconButton, Dropdown, Button, Box } from "@/Views/Atoms";
import { List, ListItem } from "@/Views/Molecules";

const UserTableList: React.FC = () => {
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
              button_name: "FiUserCheck",
              title: "Activate User",
            },
            {
              button_type: "ai",
              button_name: "AiOutlineEye",
              title: "View Details",
            },
          ].map((item, index) => (
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
          <tr>
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <Button
                variant="text"
                text="Success"
                className="rounded-10 success-btn px-5"
              />
            </td>
            <td>{hanleActionButton()}</td>
          </tr>

          <tr>
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <Button
                variant="text"
                text="Inactive"
                className="rounded-10 inactive-btn px-5"
              />
            </td>
            <td>{hanleActionButton()}</td>
          </tr>

          <tr>
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <Button
                variant="text"
                text="Pending"
                className="rounded-10 pending-btn px-5"
              />
            </td>
            <td>{hanleActionButton()}</td>
          </tr>

          <tr>
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <Button
                variant="text"
                text="Blacklisted"
                className="rounded-10 blacklisted-btn px-5"
              />
            </td>
            <td>{hanleActionButton()}</td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};

export default UserTableList;
