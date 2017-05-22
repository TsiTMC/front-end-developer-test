/**
 * QUESTION 2
 * ==========
 *
 * Complete the function 'findIntersection' below to find the intersection of two arrays. An intersection would be
 * the common elements that exists within both arrays. In this case, make sure that the elements returned are
 * also unique!
 *
 */

var initialArray = [];

var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

function findIntersection (arr1, arr2) {
    var result = [];
    
    for(var i = 0; i < arr1.length; i++)
    {
        initialArray[arr1[i]] = arr1[i];
    }
    
    for(var i = 0; i < initialArray.length; i++)
    {
        if(arr2.indexOf(initialArray[i])!==-1)
        {
            result.push(initialArray[i]);
        }
    }
    
    return result;
}

var intersection = findIntersection(firstArray, secondArray);
console.log(intersection);