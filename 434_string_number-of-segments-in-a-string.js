/**
 * @param {string} s
 * @return {number}
 */

const countSgments = (s) => {
	const newStr = s.replace(/\s+/g, ' ').trim()

	if (newStr === '') return 0

	return newStr.split(' ').length
}

const countSegmentsOptimization = function (s) {
	if (!s) return 0
	const segments = s.split(/\s+/).filter(Boolean) // Loại bỏ các phần tử rỗng sau khi split
	console.log(segments)
	return segments.length
}

console.log(countSegmentsOptimization('Hello, my name is John'))
console.log(countSegmentsOptimization('Hello'))
console.log(countSegmentsOptimization('            '))
console.log(countSegmentsOptimization(', , , ,      h, fdfd'))
