import type { NextPage } from "next";
import TestMocking from "../components/TestMocking";

const Home: NextPage = () => {
  return (
    <div>
      <header>
        <TestMocking />
      </header>
    </div>
  );
};

export default Home;
