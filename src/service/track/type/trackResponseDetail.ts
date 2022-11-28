import type { ArtistResponse } from '$service/artist/type'
import type { AlbumResponse } from '$service/album/type'

export interface TrackResponseDetail {
	id: number
	readable: boolean
	title: string
	title_short: string
	title_version: string
	isrc: string
	link: string
	share: string
	duration: number
	track_position: number
	disk_number: number
	rank: number
	release_date: string
	explicit_lyrics: boolean
	explicit_content_lyrics: number
	explicit_content_cover: number
	preview: string
	bpm: number
	gain: number
	available_countries: string[]
	contributors: ArtistResponse[]
	md5_image: string
	artist: ArtistResponse
	album: AlbumResponse
	type: string
}
