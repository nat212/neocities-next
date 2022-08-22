import { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode, useEffect, useState } from 'react';
import styles from '@styles/Layout.module.scss';
import quotes from '@data/quotes.json';
import chibi from '@public/images/chibi.png';
import Image, { ImageLoader } from 'next/image';
import Link from 'next/link';
import rainbow from '@public/images/rainbowsmall.gif';
import earth from '@public/images/color_earth.gif';

interface LayoutProps {
    pageTitle?: string;
    children: ReactNode;
}

interface NavbarLink {
    label: string;
    path: string;
}

const generateNewIndex = (allowSame: boolean, currentQuote: string | null = null): number => {
    const currIndex = currentQuote ? quotes.indexOf(currentQuote) : -1;
    const generateIndex = () => Math.floor(Math.random() * quotes.length);
    let newIndex;
    do {
        newIndex = generateIndex();
    } while (newIndex === currIndex && !allowSame);
    return newIndex;
};

const refreshQuote = (allowSame = false, currentQuote: string | null = null): string => {
    return quotes[generateNewIndex(allowSame, currentQuote)];
};

const Layout: NextPage<LayoutProps> = ({ pageTitle, children }) => {
    const [quote, setQuote] = useState(quotes[0]);
    const [hitsImgUrl, setHitsImgUrl] = useState('');

    useEffect(() => {
        setQuote(refreshQuote());
        setHitsImgUrl(window.location.hostname);
    }, []);

    const handleQuoteClick = () => {
        setQuote(refreshQuote(false, quote));
    };

    const counterLoader: ImageLoader = ({ src }) => {
        return `https://counter.websiteout.net/compte.php?S=${encodeURI(src)}&C=20&D=7&N=0&M=0`;
    };

    const moodLoader: ImageLoader = ({ src }) => {
        return `https://moods.imood.com/display/uname-${src}/fg-04573c/trans-1/imood.gif`;
    };

    const navbarLinks: NavbarLink[] = [
        { label: 'Home', path: '/' },
        { label: 'About me', path: '/about' },
        { label: 'Shrines', path: '/shrines' },
        { label: "Apps I've made", path: '/apps' },
        { label: "Games I've made", path: '/games' },
        { label: 'Credits', path: '/credits' },
    ];

    setInterval(handleQuoteClick, 60 * 1000);
    return (
        <>
            <Head>
                <title>{`Natasha's Space${pageTitle ? ` - ${pageTitle}` : ''}`}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.headerImage}>
                        <Image src={rainbow} alt="Rainbow" />
                    </div>
                    <div className={styles.headerImage}>
                        <Image src={earth} alt="Spinning Colourful earth" />
                    </div>
                    <h1>Natasha&apos;s Space!</h1>
                    <div className={styles.headerImage}>
                        <Image src={earth} alt="Spinning Colourful earth" />
                    </div>
                    <div className={styles.headerImage}>
                        <Image src={rainbow} alt="Rainbow" />
                    </div>
                </header>
                <section className={styles.left}>
                    <div className={styles.me}>
                        <Image
                            src={chibi}
                            alt="My chibi"
                            className={styles.chibi}
                            width={200}
                            height={200}
                            placeholder="empty"
                            onClick={handleQuoteClick}
                        />
                        <div className={styles.quote}>
                            {quote}
                            <button onClick={handleQuoteClick}>New</button>
                        </div>
                    </div>
                    <hr className="rainbow" />
                    <div className={styles.deets}>
                        <span className={styles.deetsLabel}>Mood</span>
                        <a href="https://www.imood.com/users/natash" target="_blank" rel="noreferrer">
                            <Image
                                loader={moodLoader}
                                src="natash"
                                width={54}
                                height={15}
                                alt="The current mood of natash at www.imood.com"
                            />
                        </a>
                        <span className={styles.deetsLabel}>Site Hits</span>
                        <a
                            href="https://www.websiteout.net/counter.php"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.hitCounter}
                        >
                            <Image
                                loader={counterLoader}
                                height={10}
                                width={49}
                                src={hitsImgUrl}
                                alt="web hit counter"
                            />
                        </a>
                    </div>
                </section>
                <main className={styles.main}>{children}</main>
                <section className={styles.right}>
                    <nav className={styles.navbar}>
                        {navbarLinks.map((link) => (
                            <Link key={link.path} href={link.path}>
                                <a>{link.label}</a>
                            </Link>
                        ))}
                    </nav>
                </section>
                <footer className={styles.footer}></footer>
            </div>
        </>
    );
};

export default Layout;
