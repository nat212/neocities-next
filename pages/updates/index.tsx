import { GetStaticProps, NextPage } from 'next';
import Layout from '@components/layout';
import PageHeader from '@components/page-header';
import { getSortedUpdatesData, UpdateMetadata } from '@lib/updates';
import Link from 'next/link';
import styles from '@styles/Updates.module.scss';

const Updates: NextPage<{ updates: UpdateMetadata[] }> = ({ updates }) => {
    return (
        <Layout pageTitle="Updates">
            <PageHeader title="Updates!" />
            <Link href="/">
                <a className={styles.homeLink}>Home</a>
            </Link>
            <ul>
                {updates.map((update) => (
                    <li key={update.id}>
                        <Link href={`/updates/${update.id}`}>
                            <a>{update.title}</a>
                        </Link>{' '}
                        - <time dateTime={update.date}>{update.date}</time>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps<{ updates: UpdateMetadata[] }> = () => {
    const updates = getSortedUpdatesData();
    return {
        props: {
            updates,
        },
    };
};

export default Updates;
