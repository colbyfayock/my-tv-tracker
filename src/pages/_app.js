import { ClerkProvider } from '@clerk/nextjs';

import '@styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp
