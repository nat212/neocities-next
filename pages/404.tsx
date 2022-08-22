import Link from 'next/link';
import { NextPage } from 'next';
import Layout from '@components/layout';
import PageHeader from '@components/page-header';

const NotFound: NextPage = () => {
    return (
        <Layout pageTitle="Not Found!">
            <PageHeader title="Not Found!" />
            <p>Sorry, the page you were looking for doesn&apos;t exist!</p>
            <p>
                Click{' '}
                <Link href="/">
                    <a>here</a>
                </Link>{' '}
                to return home!
            </p>
        </Layout>
    );
};

export default NotFound;
