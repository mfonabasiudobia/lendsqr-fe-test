import Users from "@/Views/Pages/Dashboard/Users/Users";
import { axios } from "@config";

interface UserPageModel {
  users: [];
}

const UsersPage: React.FC<UserPageModel> = ({ users }) => {
  return (
    <>
      <Users users={users} />
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get("users");

  return { props: { users: data } };
}

export default UsersPage;
