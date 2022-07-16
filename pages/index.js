// components
import Card from '../components/UI/UICard';
import HeaderPage from '../components/layouts/Header';
// data
import { projects } from '../mocks/data';
import { info } from '../mocks/text';
// styles
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
	
		<HeaderPage titleHead='Institut du Design'/>

		<main>
			<div>
				<h3>Nos derniers projets d'architecture d'intérieur</h3>
				<div>
					{projects.map((project) => {
						return (
							<Card 
								key={project.id} 
								title={project.title} 
								text={project.text}
								img={project.img}
								alt={project.alt}
							/>
						)
					})}
				</div>
			</div>
			<div>
				<h3>L'Institut du Design : Architectes d'intérieur à Paris</h3>
			</div>
			<div>
				<p>{info}</p>
			</div>
		</main>
    </div>
  )
}
