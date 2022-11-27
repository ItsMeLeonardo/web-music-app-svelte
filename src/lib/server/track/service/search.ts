import { api } from '$lib/server/api'

import type { SearchResponse } from '$entities/index'

export const searchTrack = async (query: string) => {
	const { data } = await api.get<SearchResponse>('/search', {
		params: {
			q: query
		}
	})

	return data
}
