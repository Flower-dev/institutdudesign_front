import Head from 'next/head';
// components
import Card from '../components/UI/UICard';
import HeaderPage from '../components/layouts/Header';
// data
import { projects } from '../mocks/data';
// styles
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
	
		<HeaderPage titleHead='Institut du Design'/>

		<main>
			{projects.map((project) => {
				return (
					<Card 
						key={project.id} 
						title={project.title} 
						text={project.text}
						// img={project.img}
						// alt={project.alt}
					/>
				)
			})}
		</main>
    </div>
  )
}
