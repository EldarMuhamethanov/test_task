function task1_turtle(height, dayClimbDistance, nightDescentDistance) {
	let currentDistance = 0
	let dayIndex = 1
	if (dayClimbDistance <= nightDescentDistance) {
		throw new Error('turtle will never reach the top')
	}

	while (true) {
		currentDistance += dayClimbDistance
		if (currentDistance >= height) {
			break
		}
		currentDistance -= nightDescentDistance
		dayIndex++
	}

	return dayIndex
}

console.assert(task1_turtle(100, 50, 30) === 4)
console.assert(task1_turtle(100, 50, 10) === 3)
console.assert(task1_turtle(100, 50, 0) === 2)

try {
	task1_turtle(100, 50, 60)
}
catch (e) {
	console.assert(e.message === 'turtle will never reach the top')
}