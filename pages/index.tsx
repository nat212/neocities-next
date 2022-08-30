import type { GetStaticProps, NextPage } from 'next';
import PageHeader from '@components/page-header';
import rainbowbfly from '@public/images/rainbowbfly.gif';
import Image, { StaticImageData } from 'next/image';
import trnsrits from '@public/blinkies/trnsrits.gif';
import bed from '@public/blinkies/bed.gif';
import blinky_38 from '@public/blinkies/blinky_38.gif';
import cat from '@public/blinkies/cat.gif';
import styles from '@styles/Home.module.scss';
import { useEffect, useState } from 'react';
import { getSortedUpdatesData, UpdateMetadata } from '@lib/updates';
import Link from 'next/link';
import { format as formatDate, parseISO } from 'date-fns';

interface HomeProps {
    updates: UpdateMetadata[];
    lastUpdate: string;
}

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

const Home: NextPage<HomeProps> = ({ updates, lastUpdate }) => {
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
        <>
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
            <PageHeader title="Current Status" />
            <div className={styles.statuscafe}>
                {status.content ? (
                    <>
                        <div className={styles.statuscafeUsername}>
                            <a href="https://status.cafe/users/natash" target="_blank" rel="noreferrer">
                                {status.author}
                            </a>{' '}
                            {status.face} {status.timeAgo}
                        </div>
                        <div
                            className={styles.statuscafeContent}
                            dangerouslySetInnerHTML={{ __html: status.content }}
                        ></div>
                    </>
                ) : (
                    <span>Loading status...</span>
                )}
            </div>
            <hr />
            <PageHeader title="Updates" />
            <p className={styles.lastUpdate}>
                <span>Last updated: </span>
                <time dateTime={lastUpdate}>{formatDate(parseISO(lastUpdate), 'HH:mm, dd MMMM yyyy')}</time>
            </p>
            <ul className={styles.updates}>
                {updates.map((update) => (
                    <li key={update.id}>
                        <Link href={`/updates#${update.id}`}>
                            <a>{update.title}</a>
                        </Link>{' '}
                        - <time dateTime={update.date}>{update.date}</time>
                    </li>
                ))}
            </ul>
        </>
    );
};

export const getStaticProps: GetStaticProps<HomeProps> = () => {
    const updates = getSortedUpdatesData();
    return {
        props: {
            updates,
            lastUpdate: new Date().toISOString(),
        },
    };
};

export default Home;
