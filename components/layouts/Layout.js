import Navbar from '../nav/Navbar';
import Footer from '../UI/UIFooter';
export default function Layout( {children}) {

    const LayoutContainer = {
        maxWidth: '100%',
    };
    
    return (
        <div style={LayoutContainer}>
            <Navbar/>
            {children}
            <Footer text="L'institut du Design - tous droits réservés"/>
        </div>
    )
}