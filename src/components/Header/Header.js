import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import Container from '@components/Container';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
            <a>
              TV Tracker
            </a>
          </Link>
        </p>
        <ul className={styles.headerLinks}>
          <SignedOut>
            <li>
              <Link href="/dashboard">
                <a>
                  Login
                </a>
              </Link>
            </li>
          </SignedOut>
          <SignedIn>
            <li>
              <UserButton />
            </li>
          </SignedIn>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
