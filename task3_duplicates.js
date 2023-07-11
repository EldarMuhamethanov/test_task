function task3_duplicates(str) {
	return Array.from(new Set(str.split(','))).join(',')
}

console.assert(task3_duplicates('кошка,лошадь,собака,корова') === 'кошка,лошадь,собака,корова')
console.assert(task3_duplicates('кошка,собака,лошадь,собака,корова') === 'кошка,собака,лошадь,корова')
console.assert(task3_duplicates('кошка,кошка,кошка') === 'кошка')