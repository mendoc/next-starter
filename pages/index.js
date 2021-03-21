import React from "react";
import Head from "next/head";
import Link from 'next/link';

import Nav from '../components/Nav';

import { useRouter } from 'next/router';

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
                <meta name="theme-color" content="#333033" />
            </Head>
            <Nav />
            <p>Né d'une aventure #100DaysOfCode, ce site propose un ensemble de ressources pour l'utilisation de Next.js.</p>
            <h2>Déjà qu'est-ce que Next.js ?</h2>
            <p>
                <a href="https://nextjs.org" target="_blank">Next.js</a> est un framework de développement Web front-end open-source pour React. Il permet des fonctionnalités telles que le rendu côté serveur et la génération de sites Web statiques pour les applications Web basées sur React. Il s'agit d'un framework prêt pour la production qui permet aux développeurs de créer rapidement des sites Web JAMstack statiques et dynamiques et est largement utilisé par de nombreuses grandes entreprises.
            </p>
        </React.Fragment>
    )
}

export default Home;