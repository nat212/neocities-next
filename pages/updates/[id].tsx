import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getAllUpdateIds, getUpdateData, UpdateData } from '@lib/updates';
import PageHeader from '@components/page-header';
import styles from '@styles/Update.module.scss';

const Post: NextPage<{ updateData: UpdateData }> = ({ updateData }) => {
    const onBackClick = () => {
        window.history.back();
    };
    return (
        <>
            <PageHeader title={updateData.title} />
            <div className={styles.container}>
                <time className={styles.date} dateTime={updateData.date}>
                    {updateData.date}
                </time>
                <div dangerouslySetInnerHTML={{ __html: updateData.contentHtml }} />
                <button type="button" onClick={onBackClick} className={styles.backButton}>
                    go back
                </button>
            </div>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllUpdateIds();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<{ updateData: UpdateData }, { id: string }> = async ({ params }) => {
    const updateData = await getUpdateData(params!.id);
    return {
        props: {
            updateData,
        },
    };
};

export default Post;
