import { Link } from 'react-router-dom';

function Video() {
	return null;
}

function VideoLink() {
	return (
		<>
			<Link to='/ride' className='item-margin'>
				<img
					src='https://via.placeholder.com/300x150'
					alt='placeholder'
				/>
			</Link>
		</>
	);
}

export { Video, VideoLink };
