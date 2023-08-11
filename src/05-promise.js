// Step 1
// const promise1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('Success!');
// 	}, 10000);
// });

const { get } = require("http");

// console.log(promise1);

// setTimeout(() => {
// 	console.log(promise1);
// }, 20000);

// Step 2
// const promise2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		reject('404 NOT FOUND!');
// 	}, 10000);
// });

// console.log(promise2);

// setTimeout(() => {
// 	console.log(promise2);
// }, 15000);

// Step 3

// In reality you don't know how long the request will take

// const promise3 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('Success!');
// 	}, 12000);
// });

// promise3.then((value) => {
// 	console.log(value);
// });

// Step 4
// catch the error
// const promise4 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		reject('404 NOT FOUND!');
// 	}, 12000);
// });

// promise4.catch((value) => {
// 	console.log(value);
// })

// Step 5
// I don't what will happen with my request in reality

// const promise5 = new Promise((resolve, reject) => {
// 	const random = Math.random(); // generates a random number between 0 and 1
// 	setTimeout(() => {
// 		if (random < 0.5) {
// 			resolve('Success!');
// 		} else {
// 			reject('404 NOT FOUND!');
// 		}
// 	}, 10000);
// });

// promise5
// 	.then((value) => {
// 		console.log("The resolved value is: ", value);
// 		return value;
// 	})
// 	.then((value) => {
// 		console.log("The resolved value from second then is: ", value);
// 	})
// 	.catch((value) => {
// 		console.log("The rejected value is: ", value);
// 	});

// Step 6
// Make a request to the server to get the user id then get the profile data using that id

// function getUsers() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve([
// 				{
// 					id: 1,
// 					name: "John Doe",
// 					age: 22,
// 				},
// 				{
// 					id: 2,
// 					name: "Jane Doe",
// 					age: 23,
// 				},
// 				{
// 					id: 3,
// 					name: "Jack Doe",
// 					age: 24,
// 				},
// 			]);
// 		}, 10000);
// 	});
// }

// function getProfile(userId) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve({
// 				id: 2,
// 				profile: "@jane",
// 				photo: "https://...",
// 			});
// 		}, 10000);
// 	});
// }

// getUsers()
// 	.then((users) => {
// 		const userId = users.find((user) => user.name === "Jane Doe").id;
// 		return getProfile(userId);
// 	})
// 	.then((profile) => {
// 		console.log(profile);
// 	});

// Step 7
// wait for some time in seconds

// function wait(seconds) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(seconds);
// 		}, seconds * 1000);
// 	});
// }

// wait(6).then((seconds) => {
// 	console.log(`${seconds} seconds have passed!`);
// });

// Step 8
// expensive promise constructor which takes a lot of time and blocks
// Promise construction is done immediately
// const expensivePromise = new Promise((resolve, reject) => {
// 	let sum = 0;
// 	for (let i = 0; i < 100000000000; i++) {
// 		sum += i;
// 	}
// 	resolve(sum);
// });

// console.log("I am blocked!")

// Step 9
// same expensive promise but on the next event tick(call stack empty)

// const inExpensivePromise = new Promise((resolve, reject) => {
// 	resolve();
// }).then(() => {
// 	let sum = 0;
// 	for (let i = 0; i < 100000000000; i++) {
// 		sum += i;
// 	}
// 	return sum;
// });

// console.log("I am not blocked!");

// Step 10
// Promise.resolve() and Promise.reject()

// const promise6 = Promise.resolve().then(() => {
// 	let sum = 0;
// 	for (let i = 0; i < 100000000000; i++) {
// 		sum += i;
// 	}
// 	return sum;
// });

// console.log("I am not blocked!");


// Step 11
// Promise.all()

// const promise7 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Promise 1");
// 	}, 10000);
// });

// const promise8 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Promise 2");
// 	}, 15000);
// });

// Promise.all([promise7, promise8]).then((values) => {
// 	console.log(values);
// })

// Step 12
// Promise.race

// const promise9 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Promise 1");
// 	}, 1000);
// });

// const promise10 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Promise 2");
// 	}, 15000);
// });


// Promise.race([promise9, promise10]).then((value) => {
// 	console.log(value);
// });

