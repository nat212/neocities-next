import { NextPage } from 'next';
import { format as dateFormat } from 'date-fns';
import styles from '@styles/components/DateTime.module.scss';
import { useTime } from '@components/time-provider';

const DateTime: NextPage = () => {
    const { dateTime } = useTime();
    const formatDate = (dt: Date): string => dateFormat(dt, 'HH:mm:ss');
    return (
        <time className={styles.time} dateTime={dateTime.toISOString()}>
            {formatDate(dateTime)}
        </time>
    );
};

export default DateTime;
