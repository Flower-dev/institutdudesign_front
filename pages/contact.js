// components
import HeaderPage from '../components/layouts/Header';
// data
import { contact } from '../mocks/text';
// styles
import styles from '../styles/Home.module.css'

export default function Contact() {
    return (
        <div className={styles.container}>
            <HeaderPage titleHead='Institut du Design | Contact'/>
            <main>
                <h3>Réalisons ensemble un magnifique projet</h3>
                <h4>Envoyez nous un message</h4>
                <p>{contact}</p>
            </main>
        </div>
    )
}