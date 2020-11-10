import { Video } from '../components/Video';
import { useParams } from 'react-router-dom';
import ridesData from '../assets/rides';
import './Ride.css';

function Ride() {
	const { id } = useParams();
	const { name } = ridesData.find((ride) => ride.id === id);
	return (
		<div className='container'>
			<h1 className='pb-5'>{name}</h1>
			<div className='flex align-column'>
				<div className='video'>
					<Video id={id} />
				</div>
			</div>
		</div>
	);
}

export default Ride;
