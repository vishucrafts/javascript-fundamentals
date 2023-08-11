// fetch todos from jsonplaceholder and console.log

// fetch('https://jsonplaceholder.typicode.com/todos')
// 	.then((response) => response.json())
// 	.then((todos) => {
// 		console.log(todos);
// 	});

// async function fetchTodos() {
// 	const todo1Response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// 	const todo2Response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
// 	// todo2 is blocked on todo1

// 	const todo1 = await todo1Response.json();
// 	const todo2 = await todo2Response.json();

// 	console.log([todo1, todo2]);
// }

// fetchTodos();

async function fetchTodos() {
	const todo1Promise = fetch('https://jsonplaceholder.typicode.com/todos/1');
	const todo2Promise = fetch('https://jsonplaceholder.typicode.com/todos/2');

	const [response1, response2] = await Promise.all([todo1Promise, todo2Promise])

	const todo1 = await response1.json();
	const todo2 = await response2.json();

	console.log([todo1, todo2]);
}

fetchTodos();