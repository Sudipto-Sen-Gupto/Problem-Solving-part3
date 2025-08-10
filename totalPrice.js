
let products=[
    { name:"Shirt",price:340},
    { name:"Pant",price:700},
    { name:"Bodyspray",price:540},
    { name:"Sunglass",price:600}
]

function prices(cost){
    // let min=products[0];
    sum=0;
    for(const item of cost){
        sum+=item.price;
    }
    return sum;
}

const minimum= prices(products);
console.log(minimum);