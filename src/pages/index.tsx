import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useLottie } from "lottie-react";

import birthday2 from "../assets/427-happy-birthday.json";
import birthday3 from "../assets/66659-cherry-cake.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: birthday2,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions3 = {
  loop: true,
  autoplay: true,
  animationData: birthday3,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Home: NextPage = () => {
  const { View } = useLottie(defaultOptions);
  const { View: View2 } = useLottie(defaultOptions3);

  return (
    <div className={styles.container}>
      <Head>
        <title>Aniversario de Julio</title>
        <meta name="description" content="Feliz aniversario 🎉" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Feliz Niver <a href="#">Julioooooo!</a>
        </h1>

        <div style={{ width: 300 }}>
          <>{View}</>
          DE Rafael para Julio
          <>{View2}</> Bolinho virtual de 9 reais
        </div>
      </main>
    </div>
  );
};

export default Home;
