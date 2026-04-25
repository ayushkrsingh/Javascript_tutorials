
const body = document.body;
const button = document.querySelector(".start-stop");
const heading = document.querySelector(".heading");

function randomColorGenerator() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}
console.log(randomColorGenerator())

let intervalId;
button.addEventListener("click", (e) => {
    if (e.target.textContent == "Start Changing") {
        e.target.textContent = "Stop Changing";
        intervalId = setInterval(() => {
            const randomColor = randomColorGenerator();
            heading.textContent = randomColor;
            body.style.backgroundColor = randomColor;
        }, 1000);

    } else {
        e.target.textContent = "Start Changing";
        clearInterval(intervalId)
    }
});
