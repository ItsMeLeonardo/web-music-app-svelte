<script lang="ts">
	export let postion: number
	export let name: string
	export let time: number | string
	export let active: boolean
</script>

<li>
	<button class="item" class:active>
		<span class="position">{postion}</span>
		<p class="name">{name}</p>
		<span class="time">{time}</span>
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
