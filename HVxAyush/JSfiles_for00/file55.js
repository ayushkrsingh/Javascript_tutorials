// function returning funnction

function myfunc(){
    function hello(){
        return "Hello world";
    }
    return hello;
}
const ans = myfunc();
// console.log(ans());
console.log(ans); // Output: [Function: hello]