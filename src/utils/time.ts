export const secondsToMinutes = (seconds: number): string => {
	const minutes = Math.floor(seconds / 60)
	const secondsLeft = seconds % 60

	return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`
}
