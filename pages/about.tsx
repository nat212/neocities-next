import { NextPage } from 'next';
import PageHeader from '@components/page-header';
import styles from '@styles/About.module.scss';
import face from '@public/images/face.jpeg';
import Avatar from '@components/avatar';

interface ContactLinks {
    icon: string;
    url: string;
    label: string;
}

const About: NextPage = () => {
    const links: ContactLinks[] = [
        { icon: 'fa-brands fa-square-tumblr', url: 'https://natashthetrash.tumblr.com', label: 'Tumblr' },
        { icon: 'fa-brands fa-square-github', url: 'https://github.com/nat212', label: 'GitHub' },
    ];
    return (
        <>
            <PageHeader title="About me!" />
            <div className={styles.intro}>
                <Avatar src={face} size={200} />
                <div>
                    <p>
                        I&apos;m Natasha, a 24 year old trans software developer based in South Africa 🇿🇦, focusing on
                        frontend &amp; design. My speciality is{' '}
                        <a href="https://angular.io" target="_blank" rel="noreferrer">
                            Angular
                        </a>
                        .
                    </p>
                    <p>
                        I made this site because I was a young child during the height of the old web, and I fell in
                        love with all those cutesy, pixelated sites. I was too young at the time to actually make one of
                        my own, but when I found neocities, I feel down a rabbit hole which led to the creation of this
                        space.
                    </p>
                </div>
            </div>
            <hr />
            <PageHeader title="Other places you can find me!" />
            <table className={styles.linksTable}>
                <tbody>
                    {links.map((link, index) => (
                        <tr key={index}>
                            <td>
                                <i className={link.icon}></i>
                            </td>
                            <td>
                                <a href={link.url} target="_blank" rel="noreferrer">
                                    {link.label}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>
                If you want to get in touch with me, you can email me at{' '}
                <a href="mailto:natasha@draper.net.za">natasha@draper.net.za</a>!
            </p>
            <p>
                You can also find me on Discord at <span className={styles.discord}>Natasha#2578</span>
            </p>
        </>
    );
};

export default About;
