import React from "react";
import Head from "next/head";

function About({ pok }) {
    return (
        <React.Fragment>
            <Head>
                <title>We are ...</title>
            </Head>
            <div>
                Us and {pok?.name}!
            <img src={pok?.sprites.front_default} />
            </div>
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