const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);

// console.log(xhr.readyState);   // 0

xhr.open("GET", URL)

// console.log(xhr.readystate)    // 1

// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//         // console.log(xhr)
//         const response = xhr.response;
//         console.log(typeof response)  // string
//         const data = JSON.parse(response);
//         console.log(typeof data);  // object

//     }
// }

//  OR simply this -----
// because onload means when ready state is 4 -----

xhr.onload = function () {
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data)
}


xhr.send()