import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Netflix - Dashboard</title>
        <link rel="icon" href = "https://i.pinimg.com/originals/f6/97/4e/f6974e017d3f6196c4cbe284ee3eaf4e.png"/>
      </Head>
      <Header/>
      <main>

        <section></section>
      </main>
    </div>
  );
};

export default Home;
