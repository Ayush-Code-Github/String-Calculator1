// tests/add.test.js

const add = require('../src/add');

describe('Add Function', () => {
  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return the number itself when a single number is provided', () => {
    expect(add("1")).toBe(1);
  });

  test('should return the sum of two numbers separated by a comma', () => {
    expect(add("1,2")).toBe(3);
  });

  test('should handle multiple numbers separated by commas', () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test('should handle newlines as separators', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('should support custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test('should throw an error when negative numbers are included', () => {
    expect(() => add("1,-2")).toThrow("negative numbers not allowed: -2");
  });

  test('should list all negative numbers in the error message', () => {
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2, -3");
  });

  test('should ignore numbers greater than 1000', () => {
    expect(add("2,1001")).toBe(2);
  });
});
