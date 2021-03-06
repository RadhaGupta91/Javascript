/*
• O(500 * n) --> O(n)
• O(99999999999) --> O(1)
• O(10*n2 + 5n + 20) --> O(n2)
• O(n * n) --> O(n2)
• O(n*log(n) + 30000 * n) --> O(n * log(n))  - not clear
*/

/*
1. O(n + 10)  => O(n)
2. O(100 * n)  => O(n)
3. O(25)  => O(1)
4. O(n^2 + n^3)  => O(n2)
5. O(n + n + n + n)  => O(n)
6. O(1000 * log(n) + n)  => O(log(n))
7. O(1000 * n * log(n) + n)  => O(n*log(n))
8. O(2^n + n^2)  => O(n2)
9. O(5 + 3 + 1)  => O(1)
10. O(n + n^(1/2) + n^2 + n * log(n)^10)  => O(n^(7/2)*log(n)^10 )=> log(nlogn)
*/

/**1 Question**/
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
    console.log(i);
    }
   }
/**Output : Time/space complexity**/
//Time: O(n)
//space: O(n)
/*************************************************/
/**2 Question**/
function logAtMost10(n) {
for (var i = 1; i <= Math.min(n, 10); i++) {
console.log(i);
}
}
/**Output : Time/space complexity**/
//Time: O(1)
//space: O(1)
/*************************************************/
/**3 Question**/
function logAtLeast10(n) {
for (var i = 1; i <= Math.max(n, 10); i++) {
console.log(i);
}
}
/**Output : Time/space complexity**/
//Time: Best : O(n) - not clear
//space: O(n)
/***********************************************/
/**4 Question**/
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) 
    {
        if (i % 2 === 0) 
        {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
/**Output : Time/space complexity**/
//Time: O(n)
//space: O(logn)
/***********************************************/
/**5 Question**/
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
/**Output : Time/space complexity**/
//Time: O(n*n)
//space:O(n+1)
/***********************************************/


// 1. Even or odd
function isEven(value){
 if (value % 2 == 0){
 return true;
 }
 else
 return false;
}
/**Output : Time/space complexity**/
//Time:  O(1)  - correct
//space: O(1)

/***********************************************/


// 2. Are You Here?
function areYouHere(arr1, arr2) 
{
    for (let i=0; i< arr1.length; i++)
    {
        const el1 = arr1[i];
        //ticks1++;
        for (let j=0; j<arr2.length; j++) 
        {
            const el2 = arr2[j];
            //ticks2++;
            if (el1 === el2) return true;
        }
    }
    return false;
}
/**Output : Time/space complexity**/
//Time:  Best case O(1) worst case O(n*n)
//space: O(1)
/***********************************************/
// 3. Doubler
    function doubleArrayValues(array) {
        for (let i=0; i<array.length; i++) {
            array[i] *= 2;
        }
        return array;
    }
/**Output : Time/space complexity**/
//Time:  O(n)
//space: O(n)
/***********************************************/
// 4. Naive Search
function naiveSearch(array, item) {
    for (let i=0; i<array.length; i++) 
    {
        if (array[i] === item) {
        return i;
    }
 }
/**Output : Time/space complexity**/
//Time:  Best case O(1) worst case O(n)
//space: O(1)
/***********************************************/
// 5. Creating Pairs
        function createPairs(arr) {
        for (let i = 0; i < arr.length; i++) 
        {
            for(let j = i+1; j < arr.length; j++) 
            {
                console.log(arr[i] + ", " + arr[j] );
            }
        }  
     //console.log(ticks);
    }
/**Output : Time/space complexity**/
//Time:  O(n^(array.len-i))
//space: O(n)
/***********************************************/
// 6. Computing Fibonacci Numbers
    function generateFib(num) {
     let result = [];
     for (let i = 1; i <= num; i++) 
     {
        //ticks++;
        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
     }
     return result;
    }
/**Output : Time/space complexity**/
//Time:  O(n)
//space: O(n)
/***********************************************/
// 7. Efficient Search
    function efficientSearch(array, item) 
    {
        let minIndex = 0;
        let maxIndex = array.length - 1;
        let currentIndex;
        let currentElement;
        while (minIndex <= maxIndex) {
            currentIndex = Math.floor((minIndex + maxIndex) / 2);
            currentElement = array[currentIndex];
            if (currentElement < item) {
                minIndex = currentIndex + 1;
            }
            else if (currentElement > item) {
                maxIndex = currentIndex - 1;
            }
            else {
                return currentIndex;
            }
        }
        return -1;
    }
/**Output : Time/space complexity**/
//Time:  O(log(n))
//space: O(1)
/***********************************************/
// 8. Random element
function findRandomElement(arr) 
{
     return arr[Math.floor(Math.random() * arr.length)];
}
/**Output : Time/space complexity**/
//Time:  O(1)
//space: O(1)
/***********************************************/
// 9. Is It Prime?
function isPrime(n)
{
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) 
    {
        if (n % i == 0) 
        return false;
    }
    return true;
}
/**Output : Time/space complexity**/
//Time:  O(n)
//space: O(1)
