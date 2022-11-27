import type { ArtistResponse } from '$lib/server/artist/type'
import type { AlbumResponse } from '$lib/server/album/type'

export interface SearchTrackResponse {
	data: SearchTrackResultResponse[]
	total: number
	next: string
}

type ArtistKeys =
	| 'id'
	| 'name'
	| 'link'
	| 'picture'
	| 'picture_small'
	| 'picture_medium'
	| 'picture_big'
	| 'picture_xl'
	| 'tracklist'
	| 'type'

export interface SearchTrackResultResponse {
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
	artist: Pick<ArtistResponse, ArtistKeys>
	album: AlbumResponse
	type: string
}
