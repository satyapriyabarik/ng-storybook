import React from "react";

interface NextImageShimProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    /** Mimics Next.js <Image fill /> behavior */
    fill?: boolean;
}

const NextImageShim: React.FC<NextImageShimProps> = ({
    src,
    alt = "",
    width,
    height,
    fill,
    style,
    ...props
}) => {
    const fillStyle: React.CSSProperties = fill
        ? {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover" as React.CSSProperties["objectFit"], // ✅ cast to valid enum type
        }
        : {};

    return (
        <img
            src={typeof src === "string" ? src : (src as any).src}
            alt={alt}
            width={width}
            height={height}
            style={{ ...style, ...fillStyle }}
            {...props}
        />
    );
};

export default NextImageShim;
