<script lang="ts">
	import { createEventDispatcher, onDestroy } from 'svelte'

	import { player as PlayerStore } from '$store/player'

	import PosterBodyBg from './PosterBodyBg.svelte'

	import type { Events } from './type'
	import type { Track } from '$entities/track'

	let currentTrack: Track

	let isPlaying = false
	let muted = true
	let audio: HTMLAudioElement

	const dispatch = createEventDispatcher<Events>()

	const unsubscribe = PlayerStore.subscribe(({ track }) => {
		if (track) {
			currentTrack = track
			handleChangeTrack()
		}
	})

	function handleChangeTrack() {
		handlePause()
		setTimeout(() => {
			handlePlay()
		}, 100)
	}

	function handlePause() {
		isPlaying = false
		dispatch('pause')
		if (audio) audio.pause()
	}

	function handlePlay() {
		isPlaying = true
		dispatch('play')
		if (audio) audio.play()
	}

	function handlePlayBtn() {
		if (isPlaying) {
			handlePause()
		} else {
			handlePlay()
		}
	}

	function handleShuffle() {
		dispatch('shuffle', { state: true })
	}

	function handleLike() {
		dispatch('like', { state: true, trackId: '1' })
	}

	function handlePrev() {
		dispatch('prev')
	}

	function handleNext() {
		dispatch('next')
	}

	function handleRepeat() {
		dispatch('repeat', { state: true })
	}

	function handleEndTrack() {
		handlePause()
	}

	function toggleMute() {
		muted = !muted
	}

	onDestroy(unsubscribe)
</script>

<section class="player">
	<picture class="poster">
		<img src={currentTrack.album.coverBig} alt={currentTrack.title} />
		<PosterBodyBg poster={currentTrack.album.coverBig} />

		<button class="muteBtn" on:click={toggleMute} class:muted>
			<i class="gg-headset" />
		</button>

		<button class="likeBtn" on:click={handleLike}>
			<i class="gg-heart" />
		</button>
	</picture>

	<audio
		controls
		src={currentTrack.preview}
		hidden
		volume={0.5}
		{muted}
		bind:this={audio}
		on:ended={handleEndTrack}
	/>

	<div class="controls">
		<button class="button" on:click={handleShuffle}>
			<i class="gg-sync" />
		</button>

		<button class="button" on:click={handlePrev}>
			<i class="gg-play-track-prev" />
		</button>
		<button class="button playBtn" class:isPlaying on:click={handlePlayBtn}>
			{#if isPlaying}
				<i class="gg-play-pause" />
			{:else}
				<i class="gg-play-button" />
			{/if}
		</button>
		<button class="button" on:click={handleNext}>
			<i class="gg-play-track-next" />
		</button>

		<button class="button" on:click={handleRepeat}>
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
		align-self: center;
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

			.likeBtn,
			.muteBtn {
				--size: 2rem;
				position: absolute;
				width: var(--size);
				height: var(--size);
				display: flex;
				align-items: center;
				justify-content: center;
				background: color-mod(var(--white) a(0.5));
				backdrop-filter: blur(0.5rem);
				border-radius: 50%;
			}
			.likeBtn {
				top: 0.5rem;
				right: 0.5rem;
			}
			.muteBtn {
				top: 0.5rem;
				left: 0.5rem;
				background: var(--white);

				&.muted {
					opacity: 0.5;
				}
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

			.button {
				--size: 2rem;
				width: var(--size);
				height: var(--size);
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;
			}

			.playBtn {
				aspect-ratio: 1;
				border-radius: 50%;
				background: var(--bg);
				&.isPlaying {
					animation: play 1s infinite;
				}

				@keyframes play {
					0% {
						box-shadow: 0 0 0 0 var(--light-25);
					}
					50% {
						box-shadow: 0 0 0 0.5rem var(--light-25);
					}
					100% {
						box-shadow: 0 0 0 0 var(--light-25);
					}
				}
			}
		}
	}
</style>
