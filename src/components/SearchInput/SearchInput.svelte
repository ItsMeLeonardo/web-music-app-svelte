<script lang="ts">
	import { searchTrack } from '$service/track/service/search'
	import { trackList as trackListStore } from '$store/trackList'

	import { debounce } from '$utils/debounce'

	const handleChange = debounce((event: Event) => {
		const target = event.target as HTMLInputElement
		const query = target.value.trim()

		if (query.length === 0) return
		searchTrack(query).then((tracks) => {
			trackListStore.setTrackList(tracks)
		})
	}, 500)
</script>

<div class="search">
	<label class="inputContainer">
		<span class="searchIcon">
			<i class="gg-search" />
		</span>
		<input type="text" placeholder="What do you want to listen to?" on:input={handleChange} />
		<div class="outline" />
	</label>
</div>

<style lang="postcss">
	.search {
		display: flex;
		justify-content: space-between;
		gap: 1rem;

		.inputContainer {
			flex-grow: 1;
			width: 100%;
			height: 100%;
			padding: 0.5rem 0;
			position: relative;
			cursor: text;

			.searchIcon {
				position: absolute;
				top: 50%;
				left: 1rem;
				transform: translateY(-50%);
				color: var(--color-gray-500);
				z-index: 1;
			}

			input {
				width: 100%;
				font-size: 0.85rem;
				border: none;
				outline: none;
				background: transparent;
				padding-left: 2.5rem;
				position: relative;
				z-index: 1;

				&::placeholder {
					color: var(--text);
				}

				&:focus {
				}
			}

			.outline {
				--h: 25%;
				border-radius: 0.5rem;
				position: absolute;
				bottom: calc(var(--h) * -1);
				left: 0;
				width: 0;
				height: calc(100% + var(--h) * 2);
				background: color-mod(var(--bg) a(50%));
				transition: width 0.2s ease-in-out;
				z-index: 0;
			}

			input:focus + .outline {
				width: 100%;
			}
		}
	}
</style>
