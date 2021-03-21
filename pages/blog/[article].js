import React from "react";
import Head from "next/head";
import Link from "next/link";

function Blog({ article }) {
    return (
        <React.Fragment>
            <Head>
                <title>{article?.title}</title>
                <meta name="viewport" content="initial-scale=1.0 width=device-width" />
            </Head>
            <div>
                <h1>{article?.title}</h1>
                <p>{article?.body}</p>
            </div>
            <hr />
            <p>D'autres articles</p>
            <ul>
                <li><Link href="/blog/1">Fais divers dans Libreville</Link></li>
                <li><Link href="/blog/2">Origine de la fievre jaune</Link></li>
            </ul>
            <Link href="/">Home</Link>
        </React.Fragment>
    )
}

export async function getStaticPaths() {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const articles = await res.json();

    const paths = articles.map(article => `/blog/${article.id}`)

    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.article}`);
    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export default Blog;