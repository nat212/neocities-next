import '@styles/globals.scss';
import '@styles/fonts.scss';
import '@styles/scroller.scss';
import type { AppProps } from 'next/app';
import { QuoteProvider } from '@components/quote-provider';
import { TimeProvider } from '@components/time-provider';
import { NextPage } from 'next';
import { ReactNode } from 'react';
import Layout from '@components/layout';

const Providers: NextPage<{ children: ReactNode }> = ({ children }) => {
    return (
        <QuoteProvider>
            <TimeProvider>{children}</TimeProvider>
        </QuoteProvider>
    );
};

function App({ Component, pageProps }: AppProps) {
    return (
        <Providers>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Providers>
    );
}

export default App;
