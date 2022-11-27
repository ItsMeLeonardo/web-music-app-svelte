<script lang="ts">
	import Player from '$components/Player/Player.svelte'
	import TrackList from '$components/TrackList/TrackList.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	const trackList = data.trackList.map((track) => {
		const minutes = (track.duration / 60).toFixed(2)

		return {
			name: track.title,
			time: Number(minutes)
		}
	})
</script>

<div class="wrap">
	<section class="content">
		<Player />
		<TrackList tracks={trackList} />
	</section>
</div>

<style lang="postcss">
	.wrap {
		width: 100%;
		height: 100%;
		@media screen and (min-width: 768px) {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	.content {
		width: 100%;
		max-width: 900px;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		@media screen and (min-width: 768px) {
			flex-direction: row;
		}
	}
</style>
