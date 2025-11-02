// 172. Factorial Trailing Zeroes

// Medium

// Given an integer n, return the number of trailing zeroes in n!.

// Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

 

// Example 1:

// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.
// Example 2:

// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.
// Example 3:

// Input: n = 0
// Output: 0

//SOLUTION:

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    
    let res = 0
    let div = 5

    while(Math.floor(n/div) !== 0){
        res += Math.floor(n/div)
        div *= 5
     }

    return res
};

//HINT : Read this to understand the concept and solve the problem "https://www.purplemath.com/modules/factzero.htm"