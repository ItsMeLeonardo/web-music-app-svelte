import { albumAdapter } from '$lib/server/album/adapter'

import type { Track, TrackDetail } from '$entities/track'
import type { SearchTrackResultResponse, TrackResponseDetail } from '../type'
import { artistAdapter } from '$lib/server/artist/adapter'

export const trackAdapter = (track: SearchTrackResultResponse): Track => {
	const { id, title, title_short, title_version, link, duration, rank, preview } = track

	const album = albumAdapter(track.album)
	const artist = artistAdapter(track.artist)

	return {
		id,
		title,
		duration,
		titleShort: title_short,
		titleVersion: title_version,
		link,
		rank,
		preview,
		album,
		artist
	}
}

export const trackAdapterDetail = (track: TrackResponseDetail): TrackDetail => {
	const {
		id,
		readable,
		title,
		title_short,
		title_version,
		isrc,
		link,
		share,
		duration,
		track_position,
		disk_number,
		rank,
		release_date,
		preview,
		bpm,
		gain,
		available_countries
	} = track

	const album = albumAdapter(track.album)
	const artist = artistAdapter(track.artist)

	return {
		id,
		title,
		duration,
		titleShort: title_short,
		titleVersion: title_version,
		link,
		rank,
		preview,
		artist,
		album,
		readable,
		isrc,
		share,
		trackPosition: track_position,
		diskNumber: disk_number,
		releaseDate: release_date,
		bpm,
		gain,
		available_countries
	}
}
