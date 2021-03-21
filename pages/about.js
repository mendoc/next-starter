import React from "react";
import Head from "next/head";
import Link from "next/link";

import Nav from '../components/Nav';

function About() {
    return (
        <React.Fragment>
            <Head>
                <title>Next Starter | A propos</title>
                <meta name="viewport" content="initial-scale=1.0 width=device-width" />
                <meta name="theme-color" content="#333033" />
            </Head>
            <div>
                <Nav active="about" />
                <h2>A propos du site</h2>
                <p>Ce site est pensé pour l'apprentissage de Next.js. Des articles sont publiés, des ressources sont partagées. Tout cela dans le but de vulgariser cette technologie.</p>
                <p>Si vous avez des propositions ou des conseils n'hésitez pas écrite à l'<a href="https://twitter.com/DimitriOngoua" target="_blank">auteur</a> sur Twitter</p>
                <p>Si vous souhaitez contribuer au projet, rendez-vous sur le <a href="https://github.com/mendoc/next-starter" target="_blank">dépôt</a> Github.</p>
            </div>
        </React.Fragment>
    )
}

export default About;