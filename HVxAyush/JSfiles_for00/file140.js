// fetch
// fetch is a modern way to make network requests and it returns a promise. It is more powerful and flexible than XMLHttpRequest and it is easier to use as well.


const URL = "https://jsonplaceholder.typicode.com/posts";

// GET request using fetch------------

fetch(URL)
    .then(response=>{
        if(response.ok){
            return response.json();
        } else{
            throw new Error("Something went Wrong!!");
        }
    })
    .then(data=>{
        console.log(data);
    })
    .catch(error=>{
        console.log(error)
    })



// POST request using fetch------------

fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then(response=>{
        if(response.ok){
            return response.json();
        } else{
            throw new Error("Something went Wrong!!");
        }
    })
    .then(data=>{
        console.log(data);
    })
    .catch(error=>{
        console.log(error)
    })


// similarly we can use fetch for PUT, PATCH and DELETE methods as well.