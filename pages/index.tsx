import axios from "axios";
import fm from "front-matter";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";

const Home: NextPage = () => {
  return <div></div>;
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const data = await axios.get("http://localhost:3000/docs/test.md");
  // console.log(data.data);

  const fodata = fm(data.data);

  console.log(fodata);

  return { props: {} };
};

export default Home;
