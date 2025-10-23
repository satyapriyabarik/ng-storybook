declare module "next/image" {
    import * as React from "react";

    interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
        src: string;
        alt: string;
        width?: number | string;
        height?: number | string;
        fill?: boolean;
        style?: React.CSSProperties;
    }

    const Image: React.FC<ImageProps>;
    export default Image;
}

declare module "next/link" {
    import * as React from "react";

    const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
    export default Link;
}
