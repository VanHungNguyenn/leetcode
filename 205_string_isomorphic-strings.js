/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isIsomorphic = (s, t) => {
	if (s.length !== t.length) return false

	let mappingS = {}
	let mappingT = {}

	for (let i = 0; i < s.length; i++) {
		if (!mappingS[s[i]]) {
			mappingS[s[i]] = t[i]
		}

		if (!mappingT[t[i]]) {
			mappingT[t[i]] = s[i]
		}

		if (mappingS[s[i]] !== t[i] || mappingT[t[i]] !== s[i]) {
			return false
		}
	}

	return true
}

console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
