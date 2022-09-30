// every method

// const numbers = [2, 4, 6, 8, 10];

// const ans = numbers.every((num)=>num%2 === 0);    // every element should satisfy this condition nahi to false return hoga aise agar sab even hai to true return hoga
// console.log(ans);



// %%%%%%%%%    REALISTIC EXAMPLE   %%%%%%%%%

const userCart = [
    {proID: 1, proName: "Lappy", price: 50000},
    {proID: 2, proName: "Mobile", price: 19000},
    {proID: 3, proName: "TV", price: 8000},
    {proID: 4, proName: "Speaker", price: 3000},
]

// check every product price is less than 70000
// ------------>>>>>>

// function PriceLess70k(Product){
//     return Product.price<70000;
// }
// const yesORno = userCart.every(PriceLess70k);

// $$$   OR    %%%

const yesORno = userCart.every((product)=>product.price<70000);

console.log(yesORno);