// 392. Is Subsequence

// Easy

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

//SOLUTION:


var isSubsequence = function(s, t) {
    if (s.length > t.length){
        return false
    }
    let tP = 0
    let sP = 0

    let res = ""

    for (sP; sP < s.length; sP++){
        for (tP; tP < t.length; tP++){
            if(s[sP] === t[tP]){
                res += t[tP]
                tP = tP+1
                break
            }
        }
    }
        return res === s

};