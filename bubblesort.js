const bubbleSort = (arr) => // declare a constant variable, called bubbleSort. Here we will turn it into a function, using the lambda operator.
//A lambda (or arrow) function looks like this:
//                                                 const variableName = ( what you are passing into the function ) =>
//
// They are a quick and clean way of setting up the creation of a function.
//
{
    let temp; // declare a temporary variable
    for(let i = arr.length; i > 0; i--) // create a for loop, where i is equal to the length of the array. when i is greater than zero,decrement
    {
        for(let j = 0; j < i; j++) // create a for loop. if j is greater than i, increment
        {
            if(arr[j] > arr[j + 1]) // create an if statement. if the array of j is greater than the array of j(plus 1):
            {
                temp = arr[j]; //set the temporary variable to the array of j
                arr[j] = arr[j + 1]; //set the array of j equal to the array of j(plus 1)
                arr[j + 1] = temp; // set the array of j(plus 1) to the temporary variable
            }
        }
    }
    return arr; //return the array
}

const arr = [75,1,3,4,1,2,6,3,4,2,6,7,8,6,5,34,2,551,23,12,242,35,632,24,3,2,35,6,27,2,532,14,55]; //here is my big-ass array of integers
console.log(bubbleSort(arr));


var total = 0;
for(let i = arr.length; i > 0; i--)
{
    total = total + i;
} console.log(total);