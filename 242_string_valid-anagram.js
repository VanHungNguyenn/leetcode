/**
 * @params {string} s
 * @params {string} t
 * @return {boolean}
 */

const isAnagram = (s, t) => {
	let charactersDetail = {}

	for (const element of s) {
		if (!charactersDetail[element]) {
			charactersDetail[element] = 1
		} else {
			charactersDetail[element] += 1
		}
	}

	for (const element of t) {
		if (charactersDetail[element]) {
			charactersDetail[element] -= 1
		} else {
			return false
		}
	}

	for (let key in charactersDetail) {
		if (charactersDetail[key] !== 0) {
			return false
		}
	}

	return true
}

const isAnagramOptimal = (s, t) => {
	return [...s].sort().join() === [...t].sort().join()
}

console.log(isAnagramOptimal('anagram', 'nagaram'))
console.log(isAnagramOptimal('rat', 'car'))
