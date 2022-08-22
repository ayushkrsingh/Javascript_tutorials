// functions inside functions
const app = () => {
    const myfunc = () => {
        console.log("Hello Inside Myfunc");
    }
    const addTWOnum = (num1, num2) => {
        return num1+num2;
    }
    const multTWOnum = (num1, num2) => num1*num2;   //shortcut
    console.log("Inside APP");
    
    myfunc();
    console.log(multTWOnum(2,4));
}
app();