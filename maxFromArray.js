
let marks=[87,45,54,33,100,32,93,56,65];

function maximum(number){
   let max=number[0];
    for(const item of number){
        
        if(item>max){
            max=item;
        }
    }
    return max;
}
const arr=maximum(marks);
console.log(arr);