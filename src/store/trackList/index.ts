import { writable } from 'svelte/store'

import type { Track } from '$entities/track'

function createTrackList() {
	const { subscribe, set } = writable<Track[]>([])

	const setTrackList = (trackList: Track[]) => {
		set(trackList)
	}

	return {
		subscribe,
		setTrackList
	}
}

export const trackList = createTrackList()
