export type OnLike = {
	state: boolean
	trackId: string
}

export type onShuffle = {
	state: boolean
}

export type onNext = {
	trackId: string
}

export type OnPlay = {
	trackId: string
}

export type OnPause = {
	trackId: string
}

export type OnPrev = {
	trackId: string
}

export type OnRepeat = {
	state: boolean
}

export type Events = {
	like: OnLike
	shuffle: onShuffle
	play: OnPlay
	next: onNext
	prev: OnPrev
	pause: OnPause
	repeat: OnRepeat
}
