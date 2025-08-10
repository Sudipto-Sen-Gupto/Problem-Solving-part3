
let marks=[78,56,32,5,23,65,56];

const minimum=(numbers)=>{
    let min=numbers[0];
    for(const item of numbers){
        if(min>item){
            min=item
        }
    }
    return min;
}

const arr=minimum(marks);
console.log(arr);