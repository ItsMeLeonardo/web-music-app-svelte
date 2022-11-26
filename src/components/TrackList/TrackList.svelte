<script lang="ts">
	import TrackItem from './TrackItem.svelte'

	const tracks = [
		{
			name: 'The Beginning',
			time: '3:00'
		},
		{
			name: 'The Middle',
			time: '3:00'
		},
		{
			name: "Let's see what the night can do",
			time: '3:00'
		}
	]
</script>

<section class="trackList">
	<header>
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
	</header>

	<ul class="list">
		{#each tracks as track, index (track.name)}
			<TrackItem active={index === 1} name={track.name} postion={index} time={track.time} />
		{/each}
	</ul>
</section>

<style lang="postcss">
	.trackList {
		width: 100%;

		header {
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
		}

		.list {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			padding: 0;
		}
	}
</style>
