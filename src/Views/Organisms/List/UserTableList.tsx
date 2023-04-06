import { useState } from "react";
import { Text, IconButton, Dropdown, Button, Box, Form } from "@/Views/Atoms";
import { List, ListLinkItem, ListItem, TextInput } from "@/Views/Molecules";
import { Pagination } from "@/Views/Organisms";
import { useRouter, NextRouter } from "next/router";
import Moment from "react-moment";
import moment from "moment";

interface UserTableListModel {
  users: [];
}

const UserTableList: React.FC<UserTableListModel> = ({ users }) => {
  const router: NextRouter = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const size = (postSize: number) => setPostsPerPage(postSize);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

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

  const hanleActionButton = (userId: number) => {
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
              link: `/dashboard/users/${userId}`,
            },
            {
              button_type: "fi",
              button_name: "FiUserX",
              title: "Blacklist User",
              link: "/",
            },
            {
              button_type: "fi",
              button_name: "FiUserCheck",
              title: "Activate User",
              link: "/",
            },
          ].map((item: any, index) => (
            <ListLinkItem
              key={index}
              spacingX={2}
              href={item.link}
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

  const handleFilter = () => {
    return (
      <Dropdown
        Item={<IconButton type="bs" name="BsFilter" size="md" />}
        elevation="md"
        className="left-1 top-0 z-50 bg-white rounded-2 w-80 p-5"
      >
        <Form spacingY={4}>
          <TextInput
            label="Username"
            size="md"
            className="text-sm w-full border-l-1 border-t-1 border-b-1 border-r-1"
            placeholder="User"
          />

          <TextInput
            size="md"
            label="Email"
            className="text-sm w-full border-l-1 border-t-1 border-b-1 border-r-1"
            placeholder="Email"
          />

          <Box>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="sm"
              padding="py-3"
              text="LOG IN"
              color="white"
              className="bg-accent"
            />
          </Box>
        </Form>
      </Dropdown>
    );
  };

  return (
    <Box className="space-y-5">
      <Box className="table-container" color="primary" elevation="md">
        <table>
          <thead>
            <tr className="font-semibold">
              <th className="d-flex items-center">
                <span className="inline-block">ORGANIZATION</span>{" "}
                {handleFilter()}
              </th>
              <th className="d-flex">
                <span className="inline-block">USERNAME</span> {handleFilter()}
              </th>
              <th className="d-flex">
                <span className="inline-block">EMAIL</span> {handleFilter()}
              </th>
              <th className="d-flex">
                <span className="inline-block">PHONE NUMBER</span>{" "}
                {handleFilter()}
              </th>
              <th className="d-flex">
                <span className="inline-block">DATE JOINED</span>{" "}
                {handleFilter()}
              </th>
              <th className="d-flex">
                <span className="inline-block">STATUS</span> {handleFilter()}
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((item: any, index) => (
              <tr key={index}>
                <td>{item.orgName}</td>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>
                  <Moment date={item.createdAt} format="MMM d, YYYY hh:mm A" />
                </td>
                <td>{getStatusButton(item.lastActiveDate)}</td>
                <td>{hanleActionButton(item.id)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>

      <Pagination
        totalPosts={users.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        paginate={paginate}
        size={size}
      />
    </Box>
  );
};

export default UserTableList;
