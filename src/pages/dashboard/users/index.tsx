import Users from "@/Views/Pages/Dashboard/Users/Users";
import { GetServerSideProps } from "next";
import { axios } from "@config";

interface UserPageModel {
  users: [];
}

const UsersPage: React.FC<UserPageModel> = ({ users }) => {
  return <Users users={users} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get("users");

  return { props: { users: data } };
};

export default UsersPage;
