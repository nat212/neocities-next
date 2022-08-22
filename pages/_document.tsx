import { NextPage } from 'next';
import { Head, Html, Main, NextScript } from 'next/document';

const Document: NextPage = () => {
    return (
        <Html>
            <Head>
                <script src="https://kit.fontawesome.com/9f28703bec.js" crossOrigin="anonymous" defer></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
