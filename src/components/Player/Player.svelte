<script lang="ts">
	import PosterBodyBg from './PosterBodyBg.svelte'
</script>

<section class="player">
	<picture class="poster">
		<img
			src="https://i.pinimg.com/236x/ab/38/69/ab38691fb2e67fa2553f77042a128f3c.jpg"
			alt="poster"
		/>
		<PosterBodyBg
			poster="https://i.pinimg.com/236x/ab/38/69/ab38691fb2e67fa2553f77042a128f3c.jpg"
		/>
		<button class="likeBtn">
			<i class="gg-heart" />
		</button>
	</picture>

	<div class="controls">
		<button>
			<i class="gg-sync" />
		</button>

		<button>
			<i class="gg-play-track-prev" />
		</button>
		<button class="playBtn">
			<i class="gg-play-button" />
		</button>
		<button>
			<i class="gg-play-track-next" />
		</button>

		<button>
			<i class="gg-repeat" />
		</button>
	</div>
</section>

<style lang="postcss">
	.player {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		background: rgb(0 0 0 / 3%);
		border-radius: 1rem;
		@media screen and (min-width: 768px) {
			width: 65%;
		}

		.poster {
			display: flex;
			aspect-ratio: 1 / 1;
			width: 100%;
			border-radius: 1.25rem;
			position: relative;
			background: white;
			box-shadow: 1px 11px 1rem rgb(14 14 14 / 25%);

			.likeBtn {
				--size: 2rem;
				position: absolute;
				top: 0.5rem;
				right: 0.5rem;
				width: var(--size);
				height: var(--size);
				display: flex;
				align-items: center;
				justify-content: center;
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: inherit;
			}
		}

		.controls {
			display: flex;
			gap: 1rem;
			width: 100%;
			justify-content: space-between;

			button {
				--size: 2rem;
				width: var(--size);
				height: var(--size);
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.playBtn {
				width: auto;
				height: auto;
				aspect-ratio: 1;
				border-radius: 50%;
				border: 2px solid var(--primary);
			}
		}
	}
</style>
