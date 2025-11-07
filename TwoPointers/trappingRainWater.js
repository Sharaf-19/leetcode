// 42. Trapping Rain Water

// Hard

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9
 

//SOLUTION:


var trap = function(height) {
    
    let l = 0
    let r = height.length - 1
    let maxLeft = height[l]
    let maxRight = height[r]
    let res = 0

    while(l < r){
        if(maxLeft < maxRight){
            l++
            maxLeft = Math.max(maxLeft, height[l])
            res += maxLeft - height[l]
        }
        else{
            r--
            maxRight = Math.max(maxRight, height[r])
            res += maxRight - height[r]
        }
    }

    return res
};