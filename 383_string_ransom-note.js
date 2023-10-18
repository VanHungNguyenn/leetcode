/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const canContruct = (ransomNote, magazine) => {
	let magazineList = [...magazine]

	for (const element of ransomNote) {
		if (!magazineList.includes(element)) {
			return false
		} else {
			magazineList.splice(magazineList.indexOf(element), 1)
		}
	}

	return true
} // O(n2)

const canContructOptimal = (ransomNote, magazine) => {
	let charCount = {}

	for (const char of magazine) {
		charCount[char] = (charCount[char] || 0) + 1
	}

	for (const char of ransomNote) {
		if (!charCount[char] || charCount[char] <= 0) {
			return false
		}

		charCount[char]--
	}

	return true
} // O(m+n)

console.log(canContructOptimal('aa', 'ab'))
console.log(canContructOptimal('aa', 'aab'))
