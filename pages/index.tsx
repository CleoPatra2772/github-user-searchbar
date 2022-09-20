import type { NextPage } from 'next';
import Head from 'next/head';
import Search from '../components/Search.component';
import logo from '../public/images/github-logo.svg';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Github Search App</title>
        <link rel="icon" href={logo} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <Search />
    

    </div>
  )
}

export default Home
