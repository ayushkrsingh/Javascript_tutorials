// optional chaining

const user = {
    firstName: "Ayush",
    // address: {village: "babhaniyanv", district: "varanasi"}
}

console.log(user.firstName);
// console.log(user.address.village);  // but will give eror if address doesn't exist


// we dont want errors ----   use  ?.   instead of   .

console.log(user?.address?.district);   // now even if address doesnt exist it will give undefined and no error because it will only run till user.address not till district

