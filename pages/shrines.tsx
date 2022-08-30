import { GetStaticProps, NextPage } from 'next';
import PageHeader from '@components/page-header';
import { getShrineData, ShrineData } from '@lib/shrines';

interface ShrinesProps {
    shrines: ShrineData[];
}

const Shrines: NextPage<ShrinesProps> = ({ shrines }) => {
    return (
        <>
            <PageHeader title="Shrines!" />
            {/*<nav className={styles.navigation}>
                <ul>
                    {shrines.map((shrine) => (
                        <li key={shrine.id}>
                            <Link href={`#${shrine.id}`}>
                                <a>{shrine.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <section>
                {shrines.map((shrine) => (
                    <div key={shrine.id} className={styles.shrineContainer}>
                        <h5 id={shrine.id}>{shrine.title}</h5>
                        <Image src={shrine.image} width={200} height={200} />
                    </div>
                ))}
            </section>*/}
        </>
    );
};

export default Shrines;

export const getStaticProps: GetStaticProps<ShrinesProps> = async () => {
    return {
        props: {
            shrines: await getShrineData(),
        },
    };
};
