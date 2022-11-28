import { api } from '$service/api'

import { trackAdapter } from '$service/track/adapter'

import type { SearchTrackResponse } from '$service/track/type'

export const searchTrack = async (query: string) => {
	const { data } = await api.get<SearchTrackResponse>('/search', {
		params: {
			q: query
		}
	})

	return data.data.map((track) => trackAdapter(track))
}
