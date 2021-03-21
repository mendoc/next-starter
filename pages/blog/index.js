import React from 'react'
import Head from 'next/head';
import Link from 'next/link';

import styles from './Blog.module.css';

export default function Blog({ articles }) {
    return (
        <React.Fragment>
            <Head>
                <title>Blog section</title>
                <meta name="viewport" content="initial-scale=1.0 width=device-width" />
            </Head>
            <div>
                <Link href="/">
                    <a>Go to home</a>
                </Link>
                <h2>All articles</h2>
                <hr />
                {
                    articles.map(article => {
                        return (
                            <div className={styles.article} key={article.id}>
                                <h3>{article.title}</h3>
                                <p>{article.body.substring(0, 100)}...</p>
                                <Link href={`/blog/${article.id}`}>Lire la suite</Link>
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
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await res.json();

    return {
        props: { articles }
    }
}