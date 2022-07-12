// components
import HeaderPage from '../components/layouts/Header';
// styles
import styles from '../styles/Home.module.css'

export default function Contact() {
    return (
        <div className={styles.container}>
            <HeaderPage titleHead='Institut du Design | Contact'/>
            <main>
                <h3>Réalisons ensemble un magnifique projet</h3>
                <h4>Envoyez nous un message</h4>
                <p>
                    pour une réponse adaptée, merci de préciser tous les détails 
                    qui nous permettront de mieux appréhender vos besoins 
                    (surface totale du bien, surface à étudier, description du projet, budget) 
                </p>
            </main>
        </div>
    )
}