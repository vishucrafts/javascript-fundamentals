import { describe, expect, it } from "vitest";

describe("Object method", () => {
	it("spread creates a new object", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		};

		const newObj = { ...obj };

		expect(newObj).not.toBe(obj);
		expect(newObj).toEqual(obj);
	});

	it("Object.keys", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		};

		expect(Object.keys(obj)).toEqual(["a", "b", "c"]);
	});

	it("Object.values", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		};

		expect(Object.values(obj)).toEqual([1, 2, 3]);
	});

	it("Object.entries", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		};

		expect(Object.entries(obj)).toEqual([
			["a", 1],
			["b", 2],
			["c", 3],
		]);
	});

	it("object destructuring", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		};

		const { a, b } = obj;

		expect(a).toBe(1);
		expect(b).toBe(2);
	});

	it("object destructuring with alias", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		};

		const { a: x, b: y } = obj;

		expect(x).toBe(1);
		expect(y).toBe(2);
	});

	it("object destructuring with default value", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		};

		// @ts-ignore
		const { a, b, d = 6 } = obj;

		expect(a).toBe(1);
		expect(b).toBe(2);
		expect(d).toBe(6);

		const anotherObj = {
			a: 1,
			b: 2,
			c: 3,
			d: 4,
		};
		// @ts-ignore
		const { a: x, b: y, d: z = 6 } = anotherObj;

		expect(x).toBe(1);
		expect(y).toBe(2);
		expect(z).toBe(4);
	});

	it("object destructuring with rest", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		};

		const { a, ...rest } = obj;

		expect(a).toBe(1);
		expect(rest).toEqual({ b: 2, c: 3 });
	});

	it("should get admin users", () => {
		const users = [
			{
				id: 1,
				name: "John",
				role: "admin",
			},
			{
				id: 2,
				name: "Jane",
				role: "user",
			},
			{
				id: 3,
				name: "Jack",
				role: "user",
			},
		];

		const admin = users.filter((user) => user.role === "admin");
		expect(admin).toEqual([
			{
				id: 1,
				name: "John",
				role: "admin",
			},
		]);

		// with destructing
		const admin2 = users.filter(({ role }) => role === "admin");
		expect(admin2).toEqual([
			{
				id: 1,
				name: "John",
				role: "admin",
			},
		]);
	});

	it("should merge objects", () => {
		const defaultConfiguration = {
			theme: "light",
			locale: "en",
			analytics: true,
		};

		const userConfiguration = {
			...defaultConfiguration,
			theme: "dark",
		};

		expect(userConfiguration).toEqual({
			theme: "dark",
			locale: "en",
			analytics: true,
		});
	});

	it("should covert products shape", () => {
		const products = [
			{
				id: 1,
				name: "Product 1",
				price: 10,
				quantity: 2,
			},
			{
				id: 2,
				name: "Product 2",
				price: 20,
				quantity: 1,
			},
			{
				id: 3,
				name: "Product 3",
				price: 30,
				quantity: 3,
			},
		];

		const productsWithTotal = products.map((product) => ({
			...product,
			total: product.price * product.quantity,
		}));

		// same with destructuring
		const productsWithTotal2 = products.map(({ price, quantity, ...rest }) => ({
			...rest,
			price: price,
			quantity: quantity,
			total: price * quantity,
		}));

		// property shorthand
		const productsWithTotal3 = products.map(({ price, quantity, ...rest }) => ({
			...rest,
			price,
			quantity,
			total: price * quantity,
		}));

		// with explicit return
		const productsWithTotal4 = products.map(({ price, quantity, ...rest }) => {
			return {
				...rest,
				price,
				quantity,
				total: price * quantity,
			};
		});

		expect(productsWithTotal).toEqual([
			{
				id: 1,
				name: "Product 1",
				price: 10,
				quantity: 2,
				total: 20,
			},
			{
				id: 2,
				name: "Product 2",
				price: 20,
				quantity: 1,
				total: 20,
			},
			{
				id: 3,
				name: "Product 3",
				price: 30,
				quantity: 3,
				total: 90,
			},
		]);
	});
});
