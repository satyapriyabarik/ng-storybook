import React from "react";

const NextImageShim = ({
    src,
    alt = "",
    width,
    height,
    ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src={typeof src === "string" ? src : (src as any).src} alt={alt} width={width} height={height} {...props} />
);

export default NextImageShim;
