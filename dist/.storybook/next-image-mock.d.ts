import * as React from "react";
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    fill?: boolean;
    style?: React.CSSProperties;
}
declare const MockNextImage: React.FC<ImageProps>;
export default MockNextImage;
