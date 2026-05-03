// We need to access the response data at the path /1 or /2 or /3 and so on as the endpoint to the url: https://jsonplaceholder.typicode.com/posts


const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url){
    return new Promise((resolve, reject)=>{

        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = ()=>{
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else{
                reject("Something Went wrong!!");
            }
        }

        xhr.onerror = ()=>{
            reject("Network Error!!");
        }
        xhr.send();
    })
}

sendRequest("GET", URL)
    .then(response=>{
        const data = JSON.parse(response)
        // console.log(data)
        return data;
    })
    .then(data=>{
        const id = data[3].id;
        return id;
    })
    .then(id=>{
        const url = `${URL}/${id}`;
        // console.log(url)
        return sendRequest("GET", url);
    })
    .then(newResponse=>{
        console.log(newResponse)
    })
    .catch(error=>{
        console.log(error)
    })