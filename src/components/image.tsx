import NextImage, { ImageProps } from 'next/image';

const customLoader = ({ src }: { src: string }) => src;

export default function Image(props: ImageProps) {
    return <NextImage {...props} unoptimized loader={customLoader} />;
}
