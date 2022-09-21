// reduce method
const numbers = [1,2,3,4,5];

// Aim: Sum of all the numbers in array


const myFunc = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 10);     // initial value
console.log(myFunc);

// ^^^^^^^^^^^^^   Working of reduce method   ^^^^^^^^^^^^^^^^

// accumulator  ,   currentValue  ,  return

// 1                    2               3
// 3                    3               6
// 6                    4               10
// 10                   5               15  // without initial value




const userCart = [
    {productID: 1, product: "Laptop", price: 50000},
    {productID: 2, product: "Mobile", price: 12000},
    {productID: 3, product: "Mouse", price: 600}
]
// let total = 0;
// for(product of userCart){
//     total = product.price + total;
// }
// console.log(total);     // I did it with normal loop


// with Reduce =====
const total = userCart.reduce((totalPrice, currentProduct)=>{
    return currentProduct.price + totalPrice;
}, 0);
console.log(total);

//  ^^^^^^^^^^^   Working    ^^^^^^^^^^^^^^^
// totalPrice       currentValue        return
// 0                50000               50000
// 50000            12000               62000 
// 62000            600                 62600