import { artistAdapter } from '$service/artist/adapter'

import type { AlbumDetail, Album } from '$entities/album'
import type { AlbumDetailResponse, AlbumResponse } from '../type'

export const albumDetailAdapter = (album: AlbumDetailResponse): AlbumDetail => {
	const {
		id,
		available,
		cover,
		cover_big,
		cover_medium,
		cover_small,
		cover_xl,
		duration,
		fans,
		genre_id,
		label,
		link,
		record_type,
		release_date,
		share,
		title,
		tracklist,
		type,
		upc
	} = album

	const artist = artistAdapter(album.artist)

	return {
		id,
		upc,
		type,
		link,
		fans,
		label,
		share,
		title,
		cover,
		artist,
		duration,
		available,
		coverXl: cover_xl,
		genreId: genre_id,
		coverBig: cover_big,
		trackList: tracklist,
		coverSmall: cover_small,
		recordType: record_type,
		coverMedium: cover_medium,
		releaseDate: release_date
	}
}

export const albumAdapter = (album: AlbumResponse): Album => {
	const { id, cover, cover_big, cover_medium, cover_small, cover_xl, title, tracklist } = album

	return {
		id,
		title,
		cover,
		coverXl: cover_xl,
		coverBig: cover_big,
		trackList: tracklist,
		coverSmall: cover_small,
		coverMedium: cover_medium
	}
}
