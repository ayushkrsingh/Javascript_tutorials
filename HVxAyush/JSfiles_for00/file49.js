// lexical scope


const myvar = "Value1";

function myApp(){
    // const myvar = "Value1";

    function myfunc(){
        // const myvar = "value85";
        const myfunc2 = () => {
            console.log("Inside myfunc", myvar);
        }
        myfunc2();
    }

    // const myfunc3 = () => {}

    console.log(myvar);
    myfunc();
}
myApp();