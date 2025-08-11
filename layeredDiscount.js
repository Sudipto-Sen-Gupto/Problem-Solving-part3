
function discount (quantity){
    const first100Discount=100;
    const second100Discount=90;
    const third100Discount=70;

    if(quantity<=100){
        const total=first100Discount*100;
        return total;
    }
    else if(quantity<=200){
        const firstQuantityPrice=first100Discount*100;
        const remaining=quantity-100;
        const secondQuantityPrice=remaining*second100Discount;
        total=firstQuantityPrice+secondQuantityPrice;
        return total;
    }
    else{
        const firstTotalPrice=first100Discount*100;
        const secondTotalPrice=second100Discount*100;
        remaining=quantity-200;
        const thirdQuantityPrice=remaining*third100Discount;
        
    total=firstTotalPrice+secondTotalPrice+thirdQuantityPrice;
      return total    
}

}
const price=discount(300);
console.log(price);