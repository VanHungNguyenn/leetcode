/**
 * @param {string}
 * @return {boolean}
 */

const checkRecord = (s) => {
	let countAbsent = 0
	let consecitiveLate = 0

	for (const element of s) {
		if (element === 'A') {
			countAbsent++
			if (countAbsent > 1) return false
		}

		if (element === 'L') {
			consecitiveLate++
			console.log(consecitiveLate)
			if (consecitiveLate > 2) return false
		} else {
			consecitiveLate = 0
		}
	}

	return true
}

const checkRecordOptimization = (s) => {
	return s.indexOf('A') === s.lastIndexOf('A') && !s.includes('LLL')
}

console.log(checkRecord('PPALLP'))
console.log(checkRecord('PPALLL'))
