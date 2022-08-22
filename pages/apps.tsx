import { NextPage } from 'next';
import Layout from '@components/layout';
import PageHeader from '@components/page-header';

const Apps: NextPage = () => {
    return (
        <Layout pageTitle="Apps I've made!">
            <PageHeader title="Apps I've made!" />
        </Layout>
    );
};

export default Apps;
