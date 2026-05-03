// async-await ----------


console.log("Script Starts!!")

const URL = "https://jsonplaceholder.typicode.com/posts";


async function sendRequest() {
    const response = await fetch(URL);      // it will wait until the promise is resolved and then it will return the response object
    // console.log(response) 
    if(!response.ok){
        throw new Error("Something went Wrong!!!")
    }
    const data = await response.json();
    return data;
}

sendRequest()
    .then(mydata=>{
        console.log(mydata)
    })
    .catch(error=>{
        console.log(error)
    })




console.log("Script Ends!")