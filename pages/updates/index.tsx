import { GetStaticProps, NextPage } from 'next';
import PageHeader from '@components/page-header';
import { getSortedUpdatesData, getUpdateData, UpdateData } from '@lib/updates';
import Link from 'next/link';
import styles from '@styles/Updates.module.scss';

const Updates: NextPage<{ updates: UpdateData[] }> = ({ updates }) => {
    return (
        <>
            <PageHeader title="Updates!" />
            <Link href="/">
                <a className={styles.homeLink}>Home</a>
            </Link>
            <ul>
                {updates.map((update) => (
                    <li key={update.id} id={update.id}>
                        <span>{update.title}</span> - <time dateTime={update.date}>{update.date}</time>
                        <pre
                            className={styles.updateContent}
                            dangerouslySetInnerHTML={{ __html: update.contentHtml }}
                        ></pre>
                    </li>
                ))}
            </ul>
        </>
    );
};

export const getStaticProps: GetStaticProps<{ updates: UpdateData[] }> = async () => {
    const updates = getSortedUpdatesData();
    const updatesWithData: UpdateData[] = [];
    for (const update of updates) {
        updatesWithData.push(await getUpdateData(update.id));
    }
    return {
        props: {
            updates: updatesWithData,
        },
    };
};

export default Updates;
