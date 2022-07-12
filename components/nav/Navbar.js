import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link href={'/'}>
                <a>Home</a>
            </Link>
            <Link href={'/'}>
                <a>About</a>
            </Link>
            <Link href={'/contact'}>
                <a>Contact</a>
            </Link>
        </nav>
    )
}