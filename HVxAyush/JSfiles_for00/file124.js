const mainbtn = document.querySelector(".btn");
const body = document.querySelector("body");
const text = document.querySelector(".text")
function randomColorGenerator() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}

mainbtn.addEventListener("click", ()=>{
    const randomColor = randomColorGenerator();
    console.log(randomColor);
    body.style.backgroundColor = randomColor;
    text.innerHTML = randomColor;
})
