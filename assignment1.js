let fibonacciRecursive = (n) => {
    if (n < 2) {
        return [0];
    } else if (n < 3) {
        return [0, 1];
    } else {
        return fibonacciRecursive(n - 1).concat(fibonacciRecursive(n - 1)[n - 2] + fibonacciRecursive(n - 1)[n - 3]);
    }
};

console.log(fibonacciRecursive(8)); // 0,1,1,2,3,5,8,13
