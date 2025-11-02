// 149. Max Points on a Line

// Hard

// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

 

// Example 1:


// Input: points = [[1,1],[2,2],[3,3]]
// Output: 3
// Example 2:


// Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// Output: 4


//SOLUTION:

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    
    let res = 1

    for(let i = 0; i < points.length; i++){
        let p1 = points[i]
        let count = {}

        for(let j = i + 1; j < points.length; j++){
            p2 = points[j]
            let slope

            if (p1[0] == p2[0]){
                slope = Infinity
            }
            else{
                slope = (p2[1] - p1[1]) / (p2[0] - p1[0])
            }
            count[slope] = (count[slope] || 0) + 1;
            res = Math.max(res, count[slope] + 1)
        }
    }
    return res
};