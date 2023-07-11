function task2_handshakes(peoplesCount) {
	return peoplesCount * (peoplesCount - 1) / 2
}

console.assert(task2_handshakes(10) === 45)
console.assert(task2_handshakes(9) === 36)
console.assert(task2_handshakes(1) === 0)
console.assert(task2_handshakes(100) === 4950)