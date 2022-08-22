import type { NextPage } from 'next';
import Layout from '@components/layout';
import PageHeader from '@components/page-header';
import rainbowbfly from '@public/images/rainbowbfly.gif';
import Image, { StaticImageData } from 'next/image';
import trnsrits from '@public/blinkies/trnsrits.gif';
import bed from '@public/blinkies/bed.gif';
import blinky_38 from '@public/blinkies/blinky_38.gif';
import cat from '@public/blinkies/cat.gif';
import styles from '@styles/Home.module.scss';
import { useEffect, useState } from 'react';

interface Blinky {
    alt: string;
    src: StaticImageData;
}

interface Status {
    author: string;
    timeAgo: string;
    face: string;
    content: string;
}

const getStatus = async (): Promise<Status> => {
    return fetch('https://status.cafe/users/natash/status.json').then((res) => res.json());
};

const Home: NextPage = () => {
    const blinkies: Blinky[] = [
        { alt: 'trans rights', src: trnsrits },
        { alt: 'no place like my bed', src: bed },
        { alt: 'Im a cat person', src: blinky_38 },
        { alt: 'I love my cat', src: cat },
    ];
    const [status, setStatus] = useState<Status>({} as Status);

    useEffect(() => {
        getStatus().then(setStatus);
    }, []);
    return (
        <Layout>
            <PageHeader title="Welcome to my space!" />
            <div className={styles.intro}>
                <div className={styles.imgWrapper}>
                    <Image src={rainbowbfly} alt="rainbow butterfly" />
                </div>
                <p>
                    Welcome to my little place. This is still being fleshed out, so bear with me! This is an LGBT+
                    friendly space, ACAB, Black Lives Matter, TERFs will be deleted from existence with my godlike
                    powers.
                </p>
            </div>
            <div className={styles.blinkies}>
                {blinkies.map((blinky, index) => (
                    <Image key={index} src={blinky.src} alt={blinky.alt} />
                ))}
            </div>
            <hr />
            <h5>Current Status</h5>
            <div className={styles.statuscafe}>
                {status.content ? (
                    <>
                        <div className={styles.statuscafeUsername}>
                            <a href="https://status.cafe/users/natash" target="_blank" rel="noreferrer">
                                {status.author}
                            </a>{' '}
                            {status.face} {status.timeAgo}
                        </div>
                        <div className={styles.statuscafeContent}>{status.content}</div>
                    </>
                ) : (
                    <span>Loading status...</span>
                )}
            </div>
        </Layout>
    );
};

export default Home;
