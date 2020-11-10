import { Link } from 'react-router-dom';

function Video({ id }) {
	return (
		<iframe
			width='560'
			height='315'
			src={`https://www.youtube.com/embed/${id}`}
			frameborder='0'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
			allowfullscreen
		/>
	);
}

function VideoLink({ id }) {
	return (
		<>
			<Link to={`/ride/${id}`} className='item-margin'>
				<img
					src={`https://img.youtube.com/vi/${id}/0.jpg`}
					alt='placeholder'
				/>
			</Link>
		</>
	);
}

export { Video, VideoLink };
