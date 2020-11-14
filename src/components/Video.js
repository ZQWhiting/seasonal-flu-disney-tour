import { Link } from 'react-router-dom';

function Video({ id, name }) {
	return (
		<iframe
			width='560'
			height='315'
			src={`https://www.youtube.com/embed/${id}`}
			frameBorder='0'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
			allowFullScreen
			title={name}
		/>
	);
}

function VideoLink({ id, name }) {
	return (
		<>
			<Link to={`/ride/${id}`}>
				<img
					src={`https://img.youtube.com/vi/${id}/0.jpg`}
					alt={`${name}`}
					className='img-width'
				/>
			</Link>
		</>
	);
}

export { Video, VideoLink };
