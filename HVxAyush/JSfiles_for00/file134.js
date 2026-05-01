// Promise and SetTimeout

// I want to resolve or reject promise after 2 seconds---------


function myPromise(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const value = false;    // for resolve statement, put true
            if(value){
                resolve();
            } else{
                reject();
            }

        }, 2000);
    })
}
myPromise()
    .then(()=>{console.log("Resolved")})
    .catch(()=>{console.log("Rejected")})