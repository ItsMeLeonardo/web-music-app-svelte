<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { secondsToMinutes } from '$utils/time'

	import type { Track } from '$entities/track'
	import type { Events } from './type'

	export let track: Track
	export let active: boolean
	export let position: number

	const dispatch = createEventDispatcher<Events>()

	const handleClick = () => {
		if (active) return
		dispatch('play', { id: track.id })
	}
</script>

<li>
	<button class="item" class:active on:click={handleClick}>
		<span class="position">{position}</span>
		<div class="data">
			<p class="name">{track.title}</p>
			<p class="artistName">{track.artist.name}</p>
		</div>
		<span class="time">{secondsToMinutes(track.duration)}</span>
	</button>
</li>

<style lang="postcss">
	.item {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.75rem;
		gap: 1rem;
		border-radius: 0.5rem;
		transition: background-color 0.25s ease-in-out;

		.data {
			display: flex;
			flex-direction: column;
			width: 100%;
		}

		.position,
		.name,
		.data,
		.time,
		.artistName {
			font-size: 0.8rem;
			color: var(--text);
			margin: 0;
		}

		.name,
		.artistName {
			flex-grow: 1;
			width: 100%;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			text-align: start;
			transition: color 0.2s ease;
		}
		.artistName {
			font-size: 0.7rem;
		}

		&.active {
			background: var(--text);
			.position,
			.name,
			.artistName,
			.time {
				color: white;
				font-weight: bold;
			}
		}
		&:hover {
			background: var(--text);
			.position,
			.name,
			.artistName,
			.time {
				color: white;
			}
		}
	}
</style>
