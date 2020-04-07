import axios from "axios";

const KEY = 'AIzaSyAYUMSuAI-502R1DcsNLBrHppISQGYGvlo';

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		type: 'video',
		key: KEY
	}
});


