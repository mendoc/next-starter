import React from "react";
import Head from "next/head";
import Link from "next/link";

function About() {
    return (
        <React.Fragment>
            <Head>
                <title>We are ...</title>
                <meta name="viewport" content="initial-scale=1.0 width=device-width" />
            </Head>
            <div>
                Us !
            </div>
            <Link href="/">Back to homepage</Link>
        </React.Fragment>
    )
}

export default About;