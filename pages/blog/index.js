import React from 'react'
import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
    return (
        <React.Fragment>
            <Head>
                <title>Blog section</title>
                <meta name="viewport" content="initial-scale=1.0 width=device-width" />
            </Head>
            <div>All articles</div>
            <Link href="/">
                <a>Go to home</a>
            </Link>
        </React.Fragment>
    )
}