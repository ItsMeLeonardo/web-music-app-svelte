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
		<p class="name">{track.title}</p>
		<span class="time">{secondsToMinutes(track.duration)}</span>
	</button>
</li>

<style lang="postcss">
	.item {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		gap: 0.5rem;
		border-radius: 0.5rem;
		transition: background-color 0.25s ease-in-out;

		.position,
		.name,
		.time {
			font-size: 0.8rem;
			color: var(--text);
			margin: 0;
		}

		.name {
			flex-grow: 1;
			width: 100%;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			text-align: start;
			transition: color 0.2s ease;
		}

		&.active {
			background: var(--text);
			.position,
			.name,
			.time {
				color: white;
				font-weight: bold;
			}
		}
		&:hover {
			background: var(--text);
			.position,
			.name,
			.time {
				color: white;
			}
		}
	}
</style>
