// Math operation functions

export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
  return numbers.reduce((result, num) => result - num);
}

export function multiply(numbers) {
  return numbers.reduce((result, num) => result * num, 1);
}

export function divide(numbers) {
  return numbers.reduce((result, num) => {
    if (num === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return result / num;
  });
}
