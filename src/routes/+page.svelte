<script lang="ts">
	import { player as PlayerStore } from '$store/player'

	import Player from '$components/Player/Player.svelte'
	import TrackList from '$components/TrackList/TrackList.svelte'

	import type { PageData } from './$types'

	export let data: PageData

	$: PlayerStore.changeTrack(data.trackList[0])
</script>

<div class="wrap">
	<section class="content">
		<Player />
		<TrackList tracks={data.trackList} />
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
