<script lang="ts">
	import { onDestroy } from 'svelte'
	import { player as PlayerStore } from '$store/player'
	import { trackList as trackListStore } from '$store/trackList'

	import TrackItem from './TrackItem.svelte'
	import type { Track } from '$entities/track'
	import SearchInput from '$components/SearchInput/SearchInput.svelte'

	let tracks: Track[] = []

	const unsubscribe = trackListStore.subscribe((value) => {
		tracks = value
	})

	onDestroy(unsubscribe)
</script>

<section class="trackList">
	<!-- 	<header>
		<div class="data">
			<h3 class="title">Know.</h3>
			<div class="details">
				<span class="text author">Jason mraz</span>
				<span class="text age">2018</span>
				<span class="text totalSongs">10 songs</span>
			</div>
		</div>
		<div class="reviews">
			<div class="number">
				<span class="avarage">4.5</span>
				<span class="total">/5</span>
			</div>
			<div class="stars">
				<span class="star" data-active />
				<span class="star" data-active />
				<span class="star" data-active />
				<span class="star" data-active />
				<span class="star" />
			</div>
		</div>
	</header> -->
	<SearchInput />
	<ul class="list">
		{#each tracks as track, index (track.id)}
			<TrackItem
				active={$PlayerStore.track?.id === track.id}
				position={index + 1}
				{track}
				on:play={() => PlayerStore.changeTrack(track)}
			/>
		{/each}
	</ul>
</section>

<style lang="postcss">
	.trackList {
		width: 100%;
		height: 100%;
		max-height: 400px;
		overflow: auto;
		align-self: center;
		padding: 0.5rem;

		/* 	header {
			display: flex;
			justify-content: space-between;

			.data {
				.title {
					font-weight: bold;
					font-size: 1.5rem;
					margin: 0;
				}
				.details {
					display: flex;

					.text {
						font-size: 0.8rem;
						color: var(--text);

						&::after {
							content: '•';
							margin: 0 0.5rem;
						}
						&:last-child::after {
							content: '';
							margin: 0;
						}
					}
				}
			}

			.reviews {
				.number {
					.avarage {
						font-size: 1.5rem;
						font-weight: bold;
						margin: 0;
					}

					.total {
						font-size: 0.8rem;
						color: var(--text);
					}
				}
				.stars {
					display: flex;
					gap: 0.25rem;
					.star {
						--size: 0.5rem;
						width: var(--size);
						height: var(--size);
						border-radius: 50%;
						border: 1px solid var(--text);
						display: block;

						&[data-active] {
							background: var(--text);
						}
					}
				}
			}
		} */

		.list {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			padding: 0;
		}
	}
</style>
