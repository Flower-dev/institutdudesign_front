// components
import HeaderPage from '../components/layouts/Header';
// styles
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <HeaderPage titleHead='Institut du Design | About'/>
            <main>
                <p>
                    Notre cabinet d’architectes d’intérieur vous accompagne 
                    durant toutes les étapes de votre projet d’aménagement ou de décoration d’intérieur. Basés à Paris depuis 5 ans, notre équipe de professionnels du design d’espaces 
                    (décorateurs d’intérieur, architectes, architecte d’intérieur) intervient dans tous les domaines du bâtiment : du brief aux croquis, en passant par le suivi de chantier 
                    ou le suivi de travaux ou le simple conseil en décoration ! Initialement très orientée vers les projets résidentiels basés en Ile de France, notre agence 
                    a très rapidement été sollicitée par des entreprises désireuses d’apporter à leurs bureaux une chaleur, un luxe et un design différents des entreprises 
                    traditionnelles pour des projets d’architecture commerciale.
                </p>
            </main>
        </div>
    )
}