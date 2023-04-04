import Details from "@/Views/Pages/Dashboard/Users/Details";
import { GetServerSideProps } from "next";
import { axios } from "@config";

interface UsersDetailsPageModel {
  user: any;
}

const UsersDetailsPage: React.FC<UsersDetailsPageModel> = ({ user }) => {
  return <Details user={user} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = context.query;

  const { data } = await axios.get(`users/${userId}`);

  return { props: { user: data } };
};

export default UsersDetailsPage;
