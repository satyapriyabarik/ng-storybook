import * as React from "react";

const MockNextLink = React.forwardRef<
    HTMLAnchorElement,
    React.AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => <a ref={ref} {...props} />);

export default MockNextLink;
