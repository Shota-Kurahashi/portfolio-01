import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Clint | Front-End Developer</title>
      <meta name="description" content="Generate by create next app" />
      <link rel="icon" href="../public/favicon.ico" />
    </Head>
    <Navbar />
  </div>
);

export default Home;
