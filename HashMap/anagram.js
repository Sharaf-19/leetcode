// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

//SOLUTION:

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const countMap = {}

    if(s.length !== t.length) return false

    for(let c of s){
        countMap[c] = (countMap[c] || 0) + 1
    }
    
    for(let ch of t){
        if(!countMap[ch]) return false
        
        countMap[ch]--
    }
    return true
};