// Task -2:
// Find the friend with the smallest name.

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallName(nam){
    let min=heights2[1];
    for(const item of nam){
        if(min.length>item.length){
            min=item;
        }
    }
    return min;
}
const small=smallName(heights2)
console.log(small);