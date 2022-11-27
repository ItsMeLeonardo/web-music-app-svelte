import type { Artist } from './artist'

export type Album = {
	id: number
	title: string
	cover: string
	coverSmall: string
	coverMedium: string
	coverBig: string
	coverXl: string
	trackList: string
}

export type AlbumDetail = {
	id: number
	title: string
	upc: string
	link: string
	share: string
	cover: string
	coverSmall: string
	coverMedium: string
	coverBig: string
	coverXl: string
	genreId: number
	// genres: Genres
	label: string
	duration: number
	fans: number
	releaseDate: string
	recordType: string
	available: boolean
	trackList: string
	// contributors: Contributor[]
	artist: Artist
	type: string
	// tracks: Tracks
}
