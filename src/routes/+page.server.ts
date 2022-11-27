import type { PageServerLoad } from './$types'

import { searchTrack } from '$lib/server/track/service/search'
import { trackAdapter } from '$lib/server/track/adapter'

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

	const searchResults = await searchTrack(randomQuery)
	const trackList = searchResults.map((track) => trackAdapter(track))
	return {
		trackList
	}
}
