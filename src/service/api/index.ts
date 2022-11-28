import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://deezerdevs-deezer.p.rapidapi.com',
	headers: {
		'X-RapidAPI-Key': '7028af46dcmsh56246c485fca18cp1be055jsnb15ace0594c7',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
})
