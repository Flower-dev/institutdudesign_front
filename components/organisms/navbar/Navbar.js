import Link from "next/link";


export default function Navbar() {

    const navContainer = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    };

    return (
        <div style={navContainer}>
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