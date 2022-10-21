import React from "react";
import { Helmet } from "react-helmet-async";

interface Props {
    title: string;
    description: string;
    name: string;
    type: string;
}

export default function SEO(props: Props) {
    const { title, description, name, type } = props;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0,  user-scalable=no"/>
            {/* End standard metadata tags */}
            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* End Facebook tags */}
            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {/* End Twitter tags */}
        </Helmet>
    );
}
