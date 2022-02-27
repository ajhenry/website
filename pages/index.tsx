import type { NextPage } from "next";
import { About, Contact, Header, Projects, Skills } from "../components";


const Home: NextPage = () => {
  return (
    <div className="container px-2 mx-auto sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
