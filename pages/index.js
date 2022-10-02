// components
import Card from '../components/molecules/card/Card';
import HeaderPage from '../components/organisms/header/Header';
// data
import { projects } from '../mocks/data';
import { info } from '../mocks/text';
// styles
import styles from '../styles/Home.module.css'

export default function Home() {

	const titleHomePage = {
		letterSpacing: '3px',
        textTransform: 'uppercase',
        textAlign: 'center'
	};

	const cardContainerHome = {
		display: 'flex',
		flexDirection: 'row', 
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	}

  	return (
		<div className={styles.container}>
		
			<HeaderPage titleHead='Institut du Design'/>

			<main>
				<div>
					<h3 style={ titleHomePage }>Nos derniers projets d'architecture d'intérieur</h3>
					<div style={cardContainerHome}>
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
					<h3 style={ titleHomePage }>L'Institut du Design : Architectes d'intérieur à Paris</h3>
				</div>
				<div>
					<p>{info}</p>
				</div>
			</main>
		</div>
  	)
}
