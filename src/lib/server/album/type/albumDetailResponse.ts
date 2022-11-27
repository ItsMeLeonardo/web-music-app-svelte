import type { ArtistResponse } from '$lib/server/artist/type'

import type { AlbumResponse } from './albumResponse'

type ArtistKeys =
	| 'id'
	| 'name'
	| 'picture'
	| 'picture_small'
	| 'picture_medium'
	| 'picture_big'
	| 'picture_xl'
	| 'tracklist'
	| 'type'

export interface AlbumDetailResponse {
	id: number
	title: string
	upc: string
	link: string
	share: string
	cover: string
	cover_small: string
	cover_medium: string
	cover_big: string
	cover_xl: string
	md5_image: string
	genre_id: number
	genres: Genres
	label: string
	nb_tracks: number
	duration: number
	fans: number
	release_date: string
	record_type: string
	available: boolean
	tracklist: string
	explicit_lyrics: boolean
	explicit_content_lyrics: number
	explicit_content_cover: number
	contributors: Contributor[]
	artist: Pick<ArtistResponse, ArtistKeys>
	type: string
	tracks: Tracks
}

export interface Contributor {
	id: number
	name: string
	link: string
	share: string
	picture: string
	picture_small: string
	picture_medium: string
	picture_big: string
	picture_xl: string
	radio: boolean
	tracklist: string
	type: string
	role: string
}

export interface Genres {
	data: ArtistElement[]
}

export interface ArtistElement {
	id: number
	name: string
	picture?: string
	type: string
	tracklist?: string
}

export interface Tracks {
	data: TracksDatum[]
}

export interface TracksDatum {
	id: number
	readable: boolean
	title: string
	title_short: string
	title_version: string
	link: string
	duration: number
	rank: number
	explicit_lyrics: boolean
	explicit_content_lyrics: number
	explicit_content_cover: number
	preview: string
	md5_image: string
	artist: ArtistElement
	album: AlbumResponse
	type: string
}
