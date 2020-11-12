import { VideoLink } from '../components/Video';
import ridesData from '../assets/rides';
import Header from '../components/Header';

function Home() {
	return (
		<>
			<Header />
			<div className='flex container'>
				{ridesData.map(({ id, name }) => (
					<div key={id}>
						<h2 className='thumbnail-title'>{name}</h2>
						<VideoLink id={id} name={name} />
					</div>
				))}
			</div>
		</>
	);
}

export default Home;
