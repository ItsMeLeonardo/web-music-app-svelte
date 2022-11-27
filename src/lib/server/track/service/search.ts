import { api } from '$lib/server/api'

import type { SearchTrackResponse } from '$lib/server/track/type'

export const searchTrack = async (query: string) => {
	const { data } = await api.get<SearchTrackResponse>('/search', {
		params: {
			q: query
		}
	})

	return data.data
}
