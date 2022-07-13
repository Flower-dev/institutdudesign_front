import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <div>
                <Link href={'/'}>
                    <h4>L'Intitut du Design.</h4>
                </Link>
            </div>
            <div>
                <nav>
                    <Link href={'/'}>
                        <a>Home</a>
                    </Link>
                    <Link href={'/about'}>
                        <a>About</a>
                    </Link>
                    <Link href={'/contact'}>
                        <a>Contact</a>
                    </Link>
                </nav>
            </div>
        </div>
       
    )
}