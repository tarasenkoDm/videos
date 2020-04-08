import React from 'react';
import './VideoItem.css';

const VideoItem = ({video}) => {
	return (
		<div className="item video-item">
			<img className="ui image" src={video.snippet.thumbnails.medium.url} alt='img' />
			<div className="content">
				<div className="header">{video.snippet.title}</div>
				<div className="description">{video.snippet.description}</div>
			</div>
		</div>
	)
};

export default VideoItem;
