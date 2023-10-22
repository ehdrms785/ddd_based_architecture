import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './Home.module.css';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DDD Based Architecture</title>
        <meta name="description" content="Domain Driven Design based architecture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/counter">Go to Counter</Link> <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
