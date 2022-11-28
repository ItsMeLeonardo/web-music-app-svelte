import type { PageServerLoad } from './$types'

import { searchTrack } from '$service/track/service/search'

const keywords = [
	'bad bunny',
	'eminem',
	'kanye west',
	'drake',
	'lil wayne',
	'lil pump',
	'black pink',
	'twice',
	'ive',
	'j balvin',
	'maluma',
	'anuel aa',
	'badbunny',
	'ozuna',
	'jbalvin',
	'maluma',
	'anuelaa'
]

export const load: PageServerLoad = async () => {
	const randomQuery = keywords[Math.floor(Math.random() * keywords.length)]

	const trackList = await searchTrack(randomQuery)
	return {
		trackList
	}
}
