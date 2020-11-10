import { VideoLink } from '../components/Video';
import './Home.css';
import ridesData from '../assets/rides';

function Home() {
	return (
		<div className='flex container'>
			{ridesData.map(({ id, name }) => (
				<div key={id}>
					<h2 className='title'>{name}</h2>
					<VideoLink id={id} />
				</div>
			))}
		</div>
	);
}

export default Home;
