import { NextPage } from 'next';
import Layout from '@components/layout';
import PageHeader from '@components/page-header';

const Credits: NextPage = () => {
    return (
        <Layout pageTitle="Credits">
            <PageHeader title="Site credits" />
        </Layout>
    );
};

export default Credits;
