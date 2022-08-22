import { NextPage } from 'next';
import Layout from '@components/layout';
import PageHeader from '@components/page-header';

const Games: NextPage = () => {
    return (
        <Layout pageTitle="Games I've made!">
            <PageHeader title="Games I've made!" />
        </Layout>
    );
};

export default Games;
