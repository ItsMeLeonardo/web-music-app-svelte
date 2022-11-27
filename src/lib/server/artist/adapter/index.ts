import type { ArtistResponse } from '../type'
import type { Artist } from '$entities/artist'

type requiredKeys =
	| 'id'
	| 'name'
	| 'link'
	| 'picture'
	| 'tracklist'
	| 'picture_big'
	| 'picture_medium'
	| 'picture_small'
	| 'picture_xl'

export const artistAdapter = (
	artistResponse: ArtistResponse | Pick<ArtistResponse, requiredKeys>
): Artist => {
	const {
		id,
		name,
		link,
		picture,
		tracklist,
		picture_big,
		picture_medium,
		picture_small,
		picture_xl
	} = artistResponse

	return {
		id,
		name,
		link,
		picture,
		trackList: tracklist,
		pictureBig: picture_big,
		pictureMedium: picture_medium,
		pictureSmall: picture_small,
		pictureXl: picture_xl
	}
}
