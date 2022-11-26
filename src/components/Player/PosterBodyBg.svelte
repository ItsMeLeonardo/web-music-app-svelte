<script lang="ts">
	import { portal } from 'svelte-portal'

	export let poster: string
</script>

<div class="bgContainer" use:portal={'body'}>
	<img src={poster} alt="poster" />
	<div class="bgGradient" />
</div>

<style lang="postcss">
	.bgContainer,
	.bgGradient,
	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
	.bgGradient {
		background: linear-gradient(180deg, color-mod(var(--bg) a(50%)) 0%, var(--bg) 100%);
		backdrop-filter: blur(2.5rem);
	}

	img {
		object-fit: cover;
	}
</style>
