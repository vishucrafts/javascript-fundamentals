// This is the browser program
const macroTaskQueue = [] // or event listeners


// Run the macro task queue when call stack is empty
function runMacroTaskQueue() {
	// wait for random interval of time to simulate that call stack might not be empty
	setTimeout(() => {
		while (macroTaskQueue.length) {
			const task = macroTaskQueue.shift()
			task.callback()
		}
	}, Math.random() * 1000 * 10)
}

const myButton = {
	click() {
		runMacroTaskQueue()
	},
	addEventListener(type, callback) {
		macroTaskQueue.push({ type, callback }) // Element: {type: 'click', callback}
	}
}
// const myButton = document.getElementById('myButton')

// This is my program
myButton.addEventListener('click', () => {
	console.log('click')
})

myButton.addEventListener("click", () => {
	console.log("Making a network request");
});

myButton.click()