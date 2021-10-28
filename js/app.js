// function getNumbers() {
//     let numbersChoice = prompt("Insert your numbers separated from comma");
//     const numbers = numbersChoice.split(",");
//     const parsedNumbers = [];
//     for (x of numbers) {
//         parsedNumbers.push(parseInt(x))
//     };
//     setTimeout(() => console.log(...parsedNumbers), 10000);
// }
// getNumbers()

function changeColor() {
    const wrapper = document.querySelector('.wrapper');
    let counter = 1;
    intColor = setInterval(function() {
      wrapper.classList.remove("color" + counter);
      counter++;
      if (counter > 3) counter = 1;
      wrapper.classList.add("color" + counter);
      wrapper.classList.toggle(!wrapper.classList.contains("color1"));
    }, 5000);
  }
let intColor = 0;


document.body.addEventListener("load", changeColor());
document.addEventListener("keypress", (Event) => {
    if( Event.key === "Enter") {
        clearInterval(intColor);
    }
})






