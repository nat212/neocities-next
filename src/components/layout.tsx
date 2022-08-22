import { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode, useEffect, useState } from 'react';
import styles from '@styles/Layout.module.scss';
import chibi from '@public/images/chibi.png';
import Image, { ImageLoader } from 'next/image';
import Link from 'next/link';
import rainbow from '@public/images/rainbowsmall.gif';
import earth from '@public/images/color_earth.gif';
import { refreshQuote } from '@lib/quotes';
import { useQuote } from '@components/quote-provider';
import DateTime from '@components/date-time';

interface LayoutProps {
    pageTitle?: string;
    children: ReactNode;
}

interface NavbarLink {
    label: string;
    path: string;
}

const Layout: NextPage<LayoutProps> = ({ pageTitle, children }) => {
    const [hitsImgUrl, setHitsImgUrl] = useState('');
    const { quote, setQuote } = useQuote();

    useEffect(() => {
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
                        {hitsImgUrl ? (
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
                        ) : (
                            <></>
                        )}
                    </div>
                </section>
                <main className={styles.main}>{children}</main>
                <section className={styles.right}>
                    <DateTime />
                    <hr className="rainbow" />
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
