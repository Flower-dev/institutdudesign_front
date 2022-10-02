// components
import HeaderPage from '../components/organisms/header/Header';
// data
import { about } from '../mocks/text';
// styles
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <HeaderPage titleHead='Institut du Design | About'/>
            <main>
                <p>
                    {about}
                </p>
            </main>
        </div>
    )
}