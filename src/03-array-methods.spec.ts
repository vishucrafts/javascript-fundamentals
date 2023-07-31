import { describe, expect, it } from "vitest";
import { customFilter, customMap, customReduce } from "./03-array-methods";

describe("Array methods", () => {
	it("spread syntax creates new array", () => {
		const array = [1, 2, 3];
		const result = [...array];
		expect(result).toEqual([1, 2, 3]);
		expect(result).not.toBe(array);
	});

	it("array destructuring", () => {
		const array = [1, 2, 3];
		const [a, b] = array;
		expect(a).toBe(1);
		expect(b).toBe(2);
	});

	it("spread sytax", () => {
		const array = [1, 2, 3];
		const result = [0, ...array, 4];
		expect(result).toEqual([0, 1, 2, 3, 4]);
	});

	it("destructuring with rest", () => {
		const array = [1, 2, 3];
		const [a, ...rest] = array;
		expect(a).toBe(1);
		expect(rest).toEqual([2, 3]);
	})

	it("should map an array", () => {
		const array = [1, 2, 3];

		/**
		 * Imperative code
		 * for (let i = 0; i < array.length; i++) {
		 *  array[i] = array[i] * 2
		 * }
		 */

		// Declarative
		const result = array.map((item) => item * 2);
		expect(result).toEqual([2, 4, 6]);
		expect(result).not.toBe(array);
	});

	it("should map an array with index", () => {
		const array = [1, 2, 3];

		/**
		 * Imperative code
		 * for (let i = 0; i < array.length; i++) {
		 * array[i] = array[i] * 2
		 * }
		 * 	*/

		// Declarative
		const result = array.map((item, index) => item * index);
		expect(result).toEqual([0, 2, 6]);
		expect(result).not.toBe(array);
	});

	it("should map with my custom map function", () => {
		const array = [1, 2, 3];

		const result = customMap(array, (item) => item * 2);
		expect(result).toEqual([2, 4, 6]);
		expect(result).not.toBe(array);
	})

	it("should filter an array", () => {
		const array = [1, 2, 3, 4, 5, 6];

		/**
		 * Imperative code
		 * const result = []
		 * for (let i = 0; i < array.length; i++) {
		 * if (array[i] % 2 === 0) {
		 * result.push(array[i])
		 * }
		 * }
		 * return result
		 * 	*/

		// Declarative
		const result = array.filter((item) => item % 2 === 0);
		expect(result).toEqual([2, 4, 6]);
		expect(result).not.toBe(array);
	});

	it("should filter an array with custom filter", () => {
		const array = [1, 2, 3, 4, 5, 6];

		const result = customFilter(array, (item) => item % 2 === 0);
		expect(result).toEqual([2, 4, 6]);
		expect(result).not.toBe(array);
	});

	it("should reduce an array", () => {
		const array = [1, 2, 3, 4, 5, 6];

		/**
		 * Imperative code
		 * let acc = 0
		 * for (let i = 0; i < array.length; i++) {
		 * acc += array[i]
		 * }
		 * return acc
		 * 	*/

		// Declarative
		const result = array.reduce((acc, item) => acc + item, 0);
		// acc = 0
		// item = 1, acc = 1
		// item = 2, acc = 3
		// item = 3, acc = 6
		// item = 4, acc = 10
		// item = 5, acc = 15
		// item = 6, acc = 21
		expect(result).toEqual(21);
		expect(result).not.toBe(array);
	});

	it("should reduce an array with custom reduce", () => {
		const array = [1, 2, 3, 4, 5, 6];

		const result = customReduce(array, (acc, item) => acc + item, 0);
		expect(result).toEqual(21);
		expect(result).not.toBe(array);
	})

});
