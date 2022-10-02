// organisms
import Navbar from '../organisms/navbar/Navbar';
import Footer from '../organisms/footer/Footer';

// --------------------------------

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