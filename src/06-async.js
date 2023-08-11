// const promise1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('Success!');
// 	}, 10000);
// });


// async function main() {
// 	const response = await promise1;
	
// 	console.log(response)
// }

// main();

// Step 2

// Async function automatically does Promise.resolve.then()
// It returns a promise
async function getUsers() {
	// equivalent to 
	// return Promise.resolve().then(() => {
	// 	return [
	// 		{
	// 			id: 1,
	// 			name: "John Doe",
	// 			age: 22,
	// 		},
	// 		...
	// 	]
	// })
	return [
		{
			id: 1,
			name: "John Doe",
			age: 22,
		},
		{
			id: 2,
			name: "Jane Doe",
			age: 23,
		},
		{
			id: 3,
			name: "Jack Doe",
			age: 24,
		},
	];
}

async function getProfile(userId) {
	// equivalent to
	// return Promise.resolve().then(() => {
	// 	return {
	// 		id: 2,
	// 		profile: "@jane",
	// 		photo: "https://...",
	// 	}
	// })

	return {
		id: 2,
		profile: "@jane",
		photo: "https://...",
	};
}

// You can await on a promise

async function main() {
	const users = await getUsers();
	const userId = users.find((user) => user.name === "Jane Doe").id;
	const profile = await getProfile(userId);
	
	console.log(profile);
}

main();