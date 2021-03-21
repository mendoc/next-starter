import React from "react";
import Head from "next/head";
import Link from "next/link";

function About({ pok }) {
    return (
        <React.Fragment>
            <Head>
                <title>We are ...</title>
                <meta name="viewport" content="initial-scale=1.0 width=device-width" />
            </Head>
            <div>
                Us and {pok?.name}!
            <img src={pok?.sprites.front_default} />
            </div>
            <Link href="/">Home</Link>
        </React.Fragment>
    )
}

export async function getStaticProps() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
    const pok = await res.json();

    return {
        props: {
            pok
        }
    }
}

export default About;