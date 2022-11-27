import type { Artist } from '$entities/artist'
import type { Album } from '$entities/album'

export type Track = {
	id: number
	title: string
	duration: number
	titleShort: string
	titleVersion: string
	link: string
	rank: number
	preview: string
	artist: Artist
	album: Album
}

export type TrackDetail = {
	id: number
	title: string
	duration: number
	titleShort: string
	titleVersion: string
	link: string
	rank: number
	preview: string
	artist: Artist
	album: Album
	readable: boolean
	isrc?: string
	share: string
	trackPosition: number
	diskNumber: number
	releaseDate: string
	bpm: number
	gain: number
	available_countries: string[]
	// contributors: ArtistResponse[]
}
