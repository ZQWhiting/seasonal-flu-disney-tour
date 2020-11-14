import { Video } from '../components/Video';
import { useParams, Link } from 'react-router-dom';
import ridesData from '../assets/rides';
import './Ride.css';

function Ride() {
	const { id } = useParams();
	const { name } = ridesData.find((ride) => ride.id === id);
	return (
		<div className='container'>
			<h1 className=''>{name} </h1>
			<Link to='/' className='inline'>
				<p className='align-right select-hover pb-5 mb-5'>
					Back to Home
				</p>
			</Link>

			<div className='flex align-column'>
				<div className='video'>
					<Video id={id} name={name} />
				</div>
			</div>
		</div>
	);
}

export default Ride;
