import { NextPage } from 'next';
import Image, { StaticImageData } from 'next/image';
import styles from '@styles/Avatar.module.scss';

interface AvatarProps {
    size: number;
    src: string | StaticImageData;
}

const Avatar: NextPage<AvatarProps> = ({ size, src }) => {
    return (
        <div className={styles.avatarWrapper} style={{ height: `${size}px`, width: `${size}px` }}>
            <Image src={src} height={size} width={size} alt="Avatar" />
        </div>
    );
};

export default Avatar;
