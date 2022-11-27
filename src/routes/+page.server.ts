import type { PageServerLoad } from './$types'

import { searchTrack } from '$lib/server/track/service/search'

const keywords = [
	'bad bunny',
	'black pink',
	'eminem',
	'kanye west',
	'drake',
	'lil wayne',
	'lil pump',
	'twice',
	'ive',
	'ozuna',
	'j balvin',
	'maluma',
	'anuel aa',
	'badbunny',
	'ozuna',
	'jbalvin',
	'maluma',
	'anuelaa'
]
const randomQuery = keywords[Math.floor(Math.random() * keywords.length)]

export const load: PageServerLoad = async () => {
	const searchResponse = await searchTrack(randomQuery)
	const trackList = searchResponse.data.slice(0, 10)
	return {
		trackList
	}
}
