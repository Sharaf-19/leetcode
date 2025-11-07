// 224. Basic Calculator

// Hard

// Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

// Example 1:

// Input: s = "1 + 1"
// Output: 2
// Example 2:

// Input: s = " 2-1 + 2 "
// Output: 3
// Example 3:

// Input: s = "(1+(4+5+2)-3)+(6+8)"
// // Output: 23

//SOLUTION:

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    
    let curr = 0 
    let output = 0
    let sign = 1

    const stack = []

    for (let c of s){

        if (!isNaN(c) && c !== ' ') curr = curr*10 + Number(c)

        else if(c === "-" || c === "+"){
            output += curr*sign
            curr = 0

            if(c === "-") sign = -1
            else if(c == "+") sign = 1
        }

        else if(c === "("){
            stack.push(output)
            stack.push(sign)
            output = 0
            sign = 1
        }

        else if(c === ")"){
            output += curr * sign
            output *= stack.pop()
            output += stack.pop()
            curr = 0
        }
    }

    return output + (curr * sign)
};