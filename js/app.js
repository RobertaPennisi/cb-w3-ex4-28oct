function getNumbers() {
    let numbersChoice = prompt("Insert your numbers separated from comma");
    const numbers = numbersChoice.split(",");
    const parsedNumbers = [];
    for (x of numbers) {
        parsedNumbers.push(parseInt(x))
    };
    setTimeout(() => console.log(...parsedNumbers), 10000);
}
getNumbers()


window.addEventListener("load", function() {
    const wrapper = document.querySelector('.wrapper');
    let counter = 1;
    setInterval(function() {
      wrapper.classList.remove("color" + counter);
      counter++;
      if (counter > 3) counter = 1;
      wrapper.classList.add("color" + counter);
      wrapper.classList.toggle(!wrapper.classList.contains("color1"));
    }, 5000);
  });

const stopColorChange = () => {
    window.removeEventListener("keypress", "Enter");
}




