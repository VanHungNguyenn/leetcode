/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */

const numberOfLines = function (widths, s) {
	let currentLineWidth = 0
	let lines = 1

	for (let element of s) {
		const charWidth = widths[element.charCodeAt(0) - 97]

		if (charWidth + currentLineWidth > 100) {
			currentLineWidth = 0
			lines++
		}

		currentLineWidth += charWidth
	}

	return [lines, currentLineWidth]
}

console.log(
	numberOfLines(
		[
			10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
			10, 10, 10, 10, 10, 10, 10, 10, 10,
		],
		'abcdefghijklmnopqrstuvwxyz'
	)
)
