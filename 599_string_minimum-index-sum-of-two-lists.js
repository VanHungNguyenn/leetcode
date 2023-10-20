/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */

const findRestaurant = (list1, list2) => {
	const map = new Map()

	for (let i = 0; i < list1.length; i++) {
		map.set(list1[i], i)
	}

	const result = new Map()

	for (let i = 0; i < list2.length; i++) {
		if (map.has(list2[i])) {
			result.set(list2[i], map.get(list2[i]) + i)
		}
	}

	let minValue = Math.min(...result.values())

	let keys = []

	for (let [key, val] of result.entries()) {
		if (val === minValue) keys.push(key)
	}

	return keys
}

const findRestaurantOptimization = (list1, list2) => {
	let map = {}
	let result = []
	let minSum = Infinity

	for (let i = 0; i < list1.length; i++) {
		map[list1[i]] = i
	}

	for (let j = 0; j < list2.length; j++) {
		let word = list2[j]
		if (map[word] !== undefined) {
			let sum = map[word] + j
			if (sum < minSum) {
				result = [word]
				minSum = sum
			} else if (sum === minSum) {
				result.push(word)
			}
		}
	}

	return result
}

console.log(
	findRestaurant(
		['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
		[
			'Piatti',
			'The Grill at Torrey Pines',
			'Hungry Hunter Steakhouse',
			'Shogun',
		]
	)
)

console.log(
	findRestaurant(
		['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
		['KFC', 'Shogun', 'Burger King']
	)
)

console.log(findRestaurant(['happy', 'sad', 'good'], ['sad', 'happy', 'good']))
