
function price(shirtQuantity,pantQuantity,shoeQuantity){
    const shirt=300;
    const pant=500;
    const shoe=900;
    const shirtPrice=shirt*shirtQuantity;
    const pantPrice=pant*pantQuantity;
    const shoePrice=shoe*shoeQuantity;
    const totalPrice=shirtPrice+pantPrice+shoePrice;
     
    console.log("Total shirt price=",shirtPrice);
    console.log("Total pant price=",pantPrice);
    console.log("Total shoe price=",shoePrice);
    return totalPrice;
}

const cost=price(7,5,6);
console.log(cost);