import React from 'react'
import Head from 'next/head';
import Link from 'next/link';

import Nav from '../../components/Nav';

import styles from './Blog.module.css';

export default function Blog({ articles }) {
    return (
        <React.Fragment>
            <Head>
                <title>Next Starter | Blog</title>
                <meta name="viewport" content="initial-scale=1.0 width=device-width" />
                <meta name="theme-color" content="#333033" />
            </Head>
            <div>
                <Nav active="blog" />
                <h2>Tous les articles</h2>
                <p>Des articles autour de Next.js seront disponibles ici pour vous permettre d'avoir des trucs et astuces pratiques et utiles dans vos projets.</p>
                {
                    articles.map(article => {
                        return (
                            <div className={styles.article} key={article.id}>
                                <h3>{article.title}</h3>
                                <p>{article.body.substring(0, 100)}...</p>
                                <Link href={`/blog/${article.id}`}>Lire davantage</Link>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

export async function getStaticProps() {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const articles = await res.json();
    const articles = [];

    return {
        props: { articles }
    }
}