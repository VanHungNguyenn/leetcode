let myMap = new Map()

myMap.set('key1', 'value1')
myMap.set('key2', 'value2')
myMap.set('key3', 'value3')
myMap.set('key1', 'value4')

console.log(myMap.get('key11'))
console.log(myMap.has('key3'))
console.log(myMap.entries().next().value)

console.log(myMap)

const locations = {
	'North America': {
		USA: ['Mountain View', 'Atlanta'],
	},
	Asia: {
		India: ['Bangalore'],
		China: ['Shanghai'],
	},
	Africa: {
		Egypt: ['Cairo'],
	},
}

const usaCities = locations['North America']['USA'].sort()
usaCities.forEach((city) => console.log(city))

const asiaCities = locations['Asia']
const sortedAsiaCities = []
for (const country in asiaCities) {
	asiaCities[country].forEach((city) =>
		sortedAsiaCities.push([city, country])
	)
}
sortedAsiaCities.sort()

sortedAsiaCities.forEach(([city, country]) =>
	console.log(`${city} - ${country}`)
)
