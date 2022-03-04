/* eslint-disable @typescript-eslint/no-explicit-any */

function swap(array: Array<any>, i: number, j: number) {
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

function shuffleCards(array: Array<any>) {
	for (let i = array.length; i > 0; i--) {
		const randomIndex = Math.floor(Math.random() * i);
		const currentIndex = i - 1;
		swap(array, currentIndex, randomIndex);
	}

	return array;
}

export { shuffleCards };
