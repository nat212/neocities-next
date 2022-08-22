import '@styles/globals.scss';
import '@styles/fonts.scss';
import '@styles/scroller.scss';
import type { AppProps } from 'next/app';
import { QuoteProvider } from '@components/quote-provider';

function App({ Component, pageProps }: AppProps) {
    return (
        <QuoteProvider>
            <Component {...pageProps} />
        </QuoteProvider>
    );
}

export default App;
