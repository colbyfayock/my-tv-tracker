import Head from 'next/head';
import Image from 'next/image';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';

// Show data from https://www.tvmaze.com/api
import shows from '@data/shows';

import styles from '../styles/Dashboard.module.scss';

export default function Dashboard({ watched, tracking, favorites }) {
  return (
    <Layout>
      <Head>
        <title>Dashboard - TV Tracker</title>
        <meta name="description" content="My shows tracked!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="sr-only">My Shows</h1>

      <Section>
        <Container>
          <ul className={styles.stats}>
            <li>
              <p className={styles.statsStat}>{ watched.length }</p>
              <h3 className={styles.statsTitle}>Favorites</h3>
            </li>
            <li>
              <p className={styles.statsStat}>{ tracking.length }</p>
              <h3 className={styles.statsTitle}>Tracking</h3>
            </li>
            <li>
              <p className={styles.statsStat}>{ favorites.length }</p>
              <h3 className={styles.statsTitle}>Watched</h3>
            </li>
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className={styles.heading}>Favorites</h2>

          <ul className={styles.shows}>
            {favorites.map(show => {
              return (
                <li key={show.id}>
                  <a href={show.url} rel="noopener noreferrer">
                    <Image width="300" height="422" src={show.image.medium} alt={`${show.name} Poster`} />
                  </a>
                  <h3 className={styles.showsTitle}>
                    <a href={show.url} rel="noopener noreferrer">{ show.name }</a>
                  </h3>
                </li>
              )
            })}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className={styles.heading}>Tracking</h2>

          <ul className={styles.shows}>
            {tracking.map(show => {
              return (
                <li key={show.id}>
                  <a href={show.url} rel="noopener noreferrer">
                    <Image width="300" height="422" src={show.image.medium} alt={`${show.name} Poster`} />
                  </a>
                  <h3 className={styles.showsTitle}>
                    <a href={show.url} rel="noopener noreferrer">{ show.name }</a>
                  </h3>
                </li>
              )
            })}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className={styles.heading}>Watched</h2>

          <ul className={styles.shows}>
            {watched.map(show => {
              return (
                <li key={show.id}>
                  <a href={show.url} rel="noopener noreferrer">
                    <Image width="300" height="422" src={show.image.medium} alt={`${show.name} Poster`} />
                  </a>
                  <h3 className={styles.showsTitle}>
                    <a href={show.url} rel="noopener noreferrer">{ show.name }</a>
                  </h3>
                </li>
              )
            })}
          </ul>
        </Container>
      </Section>
    </Layout>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      watched: shows,
      tracking: [...shows].sort(() => 0.5 - Math.random()).slice(0,6),
      favorites: [...shows].sort(() => 0.5 - Math.random()).slice(0,3),
    }
  }
}