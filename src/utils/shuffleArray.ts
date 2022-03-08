/**
 * Fisher–Yates shuffle algorithm (https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function shuffleArray(array: Array<any>) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	return array;
}

export { shuffleArray };
