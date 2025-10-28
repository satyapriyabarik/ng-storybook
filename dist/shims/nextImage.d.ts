import React from "react";
interface NextImageShimProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    /** Mimics Next.js <Image fill /> behavior */
    fill?: boolean;
}
declare const NextImageShim: React.FC<NextImageShimProps>;
export default NextImageShim;
