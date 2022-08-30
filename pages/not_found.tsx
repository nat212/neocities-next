import Link from 'next/link';
import { NextPage } from 'next';
import PageHeader from '@components/page-header';

const NotFound: NextPage = () => {
    return (
        <>
            <PageHeader title="Not Found!" />
            <p>Sorry, the page you were looking for doesn&apos;t exist!</p>
            <p>
                Click{' '}
                <Link href="/">
                    <a>here</a>
                </Link>{' '}
                to return home!
            </p>
        </>
    );
};

export default NotFound;
