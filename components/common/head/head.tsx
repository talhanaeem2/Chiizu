import { memo } from "react";
import NextHead from "next/head";

import IHeadProps from "@/components/common/head/interfaces/IHeadProps";

const Head = (props: IHeadProps) => (
    <NextHead>
        <title>Chiizu</title>
        <meta name="description" content={props.head.description} />
        <meta name="keywords" content={props.head.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/favicon.ico" />
    </NextHead>
);

export default memo(Head);