import Navbar from '../nav/Navbar';
import Footer from '../UI/UIFooter';
export default function Layout( {children}) {
    return (
        <>
            <Navbar/>
            {children}
            <Footer text="L'institut du Design - tous droits réservés"/>
        </>
    )
}