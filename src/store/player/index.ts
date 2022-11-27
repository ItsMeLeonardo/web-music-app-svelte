import { writable } from 'svelte/store'

import type { Track } from '$entities/track'

// here manage the track state, play | pause | next | previous ...

type PlayerStore = {
	track: Track | null
	state: 'play' | 'pause'
}

const initialState: PlayerStore = {
	track: null,
	state: 'pause'
}

function createPlayer() {
	const { subscribe, update } = writable<PlayerStore>(initialState)

	const changeTrack = (track: Track) => {
		update(() => {
			return {
				state: 'pause',
				track
			}
		})
	}

	const toggleState = () => {
		update((state) => {
			return {
				...state,
				state: state.state === 'play' ? 'pause' : 'play'
			}
		})
	}

	return {
		subscribe,
		changeTrack,
		toggleState
		// reset: () => {}
	}
}

export const player = createPlayer()
