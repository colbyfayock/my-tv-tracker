import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/router';

import '@styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isPublicRoute = ['/'].includes(pathname);
  return (
    <ClerkProvider>
      {isPublicRoute && (
        <Component {...pageProps} />
      )}
      {!isPublicRoute && (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
}

export default MyApp
