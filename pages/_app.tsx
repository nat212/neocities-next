import '@styles/globals.scss';
import '@styles/fonts.scss';
import '@styles/scroller.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
