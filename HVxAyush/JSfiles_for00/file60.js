// sort method
// ASCII Table
// char :  ascii value


// '0'     :        48
// '1'     :        49
// '2'     :        50
// '3'     :        51
// '4'     :        52
// '5'     :        53
// '6'     :        54
// '7'     :        55
// '8'     :        56
// '9'     :        57


// ':'     :        58
// ';'     :        59
// '<'     :        60
// '='     :        61
// '>'     :        62
// '?'     :        63
// '@'     :        64
      
      
// 'A'     :        65
// 'B'     :        66
// 'C'     :        67
// 'D'     :        68
// 'E'     :        69
// 'F'     :        70
// 'G'     :        71
// 'H'     :        72
// 'I'     :        73
// 'J'     :        74
// 'K'     :        75
// 'L'     :        76
// 'M'     :        77
// 'N'     :        78
// 'O'     :        79
// 'P'     :        80
// 'Q'     :        81
// 'R'     :        82
// 'S'     :        83
// 'T'     :        84
// 'U'     :        85
// 'V'     :        86
// 'W'     :        87
// 'X'     :        88
// 'Y'     :        89
// 'Z'     :        90
      
      
// '['     :        91
// '\'     :        92
// ']'     :        93
// '^'     :        94
// '_'     :        95
// '`'     :        96
    
    
// 'a'     :        97
// 'b'     :        98
// 'c'     :        99
// 'd'     :        100
// 'e'     :        101
// 'f'     :        102
// 'g'     :        103
// 'h'     :        104
// 'i'     :        105
// 'j'     :        106
// 'k'     :        107
// 'l'     :        108
// 'm'     :        109
// 'n'     :        110
// 'o'     :        111
// 'p'     :        112
// 'q'     :        113
// 'r'     :        114
// 's'     :        115
// 't'     :        116
// 'u'     :        117
// 'v'     :        118
// 'w'     :        119
// 'x'     :        120
// 'y'     :        121
// 'z'     :        122
      
// '{'     :        123
// '/'     :        124
// '}'     :        125


// sort method will change the array



// To sort-     99, 5, 1300, 4000, 20
// Expected-    5, 20, 99, 1300, 4000

// '0'     :      48
// '1'     :      49
// '2'     :      50
// '3'     :      51
// '4'     :      52
// '5'     :      53
// '6'     :      54
// '7'     :      55
// '8'     :      56
// '9'     :      57

// Numbers sorting
// const numbers = [99, 5, 1300, 4000, 20];

// output-   [1300, 20, 4000, 5, 99]
// HOW???
// ["99", "5", "1300", "4000", "20"]        // sort as a string acc. to ASCII code--    will take first digit and compare with its ascii value, no matter that the whole number is greater of smaller..

// numbers.sort();    
// console.log(numbers);


// String sort
const usernames = ["Ayush", "Abcd", "abcd", "French", "royal", "Yash"];
usernames.sort();
// output=  ['Abcd', 'Ayush', 'French', 'Yash', 'abcd', 'royal']
console.log(usernames);


// How to actually sort numbers in asc or dec order

const numbers = [99, 5, 1300, 4000, 20];

numbers.sort((a, b) => {
    // return a-b;   // for ascending order
    return b-a;   // for descending order
});
// OR SIMPLY
// numbers.sort((a,b)=>a-b);

console.log(numbers);



// ########### Real life senario

const products = [
    {proId: 1, proName: "Pro1", Price: 2000},
    {proId: 2, proName: "Pro2", Price: 9000},
    {proId: 3, proName: "Pro3", Price: 100},
    {proId: 4, proName: "Pro4", Price: 900},
    {proId: 5, proName: "Pro5", Price: 290},
    {proId: 6, proName: "Pro6", Price: 1000},
]

// LowToHigh Prices sort

// const LowToHigh = products.sort((a,b)=>{
//     return a.Price - b.Price;
// })
// console.log(LowToHigh);
// console.log(products);  //products is also changed that's why use cloning array with it,,,

// SLICING METHOD
// const copyOfproducts = products.slice(0)
// console.log(copyOfproducts);

const LowToHigh = products.slice(0).sort((a,b)=>{   // products array cloned into LowToHight array
    return a.Price - b.Price;
})
console.log(LowToHigh);
console.log(products);  // now the original array didn't change




// ^^^^^^^^^^^^^^  SORTING METHOD DONE  ^^^^^^^^^^^^^^^