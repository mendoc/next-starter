import Link from 'next/link';

export default function Nav({ active }) {
    return (
        <nav>
            <Link href="/"><a>Next Starter</a></Link>
            <ul>
                <li><Link href="/blog"><a className={active === 'blog' && 'active'}>Blog</a></Link></li>
                <li><Link href="/about"><a className={active === 'about' && 'active'}>A propos</a></Link></li>
            </ul>
        </nav>
    )
}