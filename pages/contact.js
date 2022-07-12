// components
import HeaderPage from '../components/layouts/Header';
// styles
import styles from '../styles/Home.module.css'

export default function Conctact() {
    return (
        <div className={styles.container}>
            <HeaderPage titleHead='Institut du Design | Contact'/>
            <main>
                <p>test contact</p>
            </main>
        </div>
    )
}