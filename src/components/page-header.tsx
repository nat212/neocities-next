import { NextPage } from 'next';
import styles from '@styles/PageHeader.module.scss';
import Image from '@components/image';
import heart from '@public/images/heart.gif';

interface PageHeaderProps {
    title: string;
}

const PageHeader: NextPage<PageHeaderProps> = ({ title }) => {
    return (
        <>
            <h4 className={styles.heading}>
                <Image src={heart} alt="bouncing heart" />
                <span className={styles.title}>{title}</span>
                <Image src={heart} alt="bouncing heart" />
            </h4>
        </>
    );
};

export default PageHeader;
