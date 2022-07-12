import Footer from '../UI/UIFooter';
export default function Layout( {children}) {
    return (
        <>
            {children}
            <Footer text="L'institut du Design - tous droits réservés"/>
        </>
    )
}