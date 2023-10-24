/**
 * @param {string[]} emails
 * @return {number}
 */

const numUniqueEmails = (emails) => {
	let set = new Set()

	for (let email of emails) {
		const [localName, domainName] = email.split('@')

		const realLocalName = localName.split('+')[0].replaceAll('.', '')

		set.add(realLocalName + '@' + domainName)
	}

	return set.size
}

console.log(
	numUniqueEmails([
		'test.email+alex@leetcode.com',
		'test.e.mail+bob.cathy@leetcode.com',
		'testemail+david@lee.tcode.com',
	])
)

console.log(
	numUniqueEmails(['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com'])
)
