import React from "react";
import Head from "next/head";
import Link from 'next/link';
import { useRouter  } from 'next/router';

function Home() {

    const router = useRouter();

    const handleclick = (e) => {
        e.preventDefault();

        router.push("/about");
    }

    return (
        <React.Fragment>
            <Head>
                <title>Next Starter</title>
                <meta name="viewport" content="initial-scale=1.0 width=device-width" />
            </Head>
            <div>Welcome bro!</div>
            <Link href="/blog">
                Go to the blog
            </Link>
            <p onClick={handleclick}>See who we are</p>
        </React.Fragment>
    )
}

export default Home;