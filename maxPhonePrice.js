 
 let mobile=[
    {name:"Nokia",price:23000,color:"Black"},
    {name:"Samsung",price:15000,color:"Ash"},
    {name:"Iphone",price:100000,color:"Red"},
    {name:"Redmi",price:30000,color:"Merun"},
    {name:"Realme",price:120000,color:"13000"}
 ]

 function price(num){
    let max=num[0];
    for(const item of num){
        if(max.price<item.price){
            max=item
        }
    }
    
    return max;
 }
 const arr=price(mobile);
 console.log(arr);