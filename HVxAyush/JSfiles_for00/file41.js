// object destructuring
const band = {
    bandName: "Led Zeppelin",
    famousSong: "Stairway to heaven",
    year: 1943,
    anotherSong: "Kashmir",
};
// extracting the key values from object to a variable
// const var1 = band.bandName;
// const var2 = band.famousSong;
// console.log(var1, var2);

// OR
const {bandName, famousSong, ...remainingItems} = band;
console.log(bandName, famousSong);
console.log(remainingItems);    // an object containing year and anotherSong


// OR if variable should be except bandName and famousSong then,,,,,,
// const{bandName:var1, famousSong:var2} = band;
// console.log(var1, var2);
