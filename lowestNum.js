// Task -1:
// Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

function lowestNum(arr){
    let low=arr[0];
    for(const item of arr){
         if(item<low){
            low=item;
         }
    }
    return low;
}
const min=lowestNum(heights2)
console.log(min);