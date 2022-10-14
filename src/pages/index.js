import Head from 'next/head';
import Image from 'next/image';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Button from '@components/Button';

// Show data from https://www.tvmaze.com/api
import shows from '@data/shows';

import styles from '../styles/Home.module.scss';

export default function Home({ popular }) {
  return (
    <Layout>
      <Head>
        <title>TV Tracker</title>
        <meta name="description" content="Home for your favorite shows" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="sr-only">TV Tracker</h1>

      <Section>
        <Container>
          <h2 className={styles.heading}>Popular Shows</h2>

          <ul className={styles.shows}>
            {popular.map(show => {
              return (
                <li key={show.id}>
                  <Image width="300" height="422" src={show.image.medium} alt={`${show.name} Poster`} />
                  <h3 className={styles.showsTitle}>{ show.name }</h3>
                </li>
              )
            })}
          </ul>
        </Container>
      </Section>

      <Section className={styles.loginSection}>
        <Container>
          <h2 className={styles.heading}>Track your favorite shows!</h2>

          <p>
            Sign up or log in to keep track of the shows you love.
          </p>

          <p className={styles.loginCta}>
            <Button href="/dashboard">Log In</Button>
          </p>
        </Container>
      </Section>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      popular: shows.sort(() => 0.5 - Math.random()).slice(0,4)
    }
  }
}