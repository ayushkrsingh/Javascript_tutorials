// some method

const numbers = [2, 4, 5, 10, 16];

// check is there is any number which is odd in this array   -------->

const ans = numbers.some((number)=>number%2 === 1);
console.log(ans);   // true because yes there is 5 in the array which is an odd number


// %%%%%%%%%    REALISTIC EXAMPLE   %%%%%%%%%

const userCart = [
    {proID: 1, proName: "Lappy", price: 50000},
    {proID: 2, proName: "Mobile", price: 19000},
    {proID: 3, proName: "TV", price: 8000},
    {proID: 3, proName: "Iphone14", price: 120000},
    {proID: 4, proName: "Speaker", price: 3000},
]

const YesOrNo = userCart.some((product)=>product.price>100000);
console.log(YesOrNo);   // true bacause Iphone14 price is 1lakh 20hazar
