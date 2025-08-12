// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
function calculateElectronicsBudget(laptop,tablets,mobile){
    let sum;
    sum=laptop+tablets+mobile;
    return sum;
}
const price=calculateElectronicsBudget(35000,15000,20000);
console.log(price);