import * as React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    fill?: boolean;
    style?: React.CSSProperties;
}

const MockNextImage: React.FC<ImageProps> = ({
    src,
    alt,
    width,
    height,
    fill,
    style,
    ...props
}) => {
    const computedStyle: React.CSSProperties = fill
        ? { objectFit: "cover", width: "100%", height: "100%", ...style }
        : { width, height, ...style };

    return <img src={src} alt={alt} style={computedStyle} {...props} />;
};

export default MockNextImage;
