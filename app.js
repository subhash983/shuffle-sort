let numbersArr = Array.from({ length: 9 }, (v, i) => i + 1);

window.addEventListener("load", () => {
  generateNumberDivs(numbersArr);
});

const shuffleNumbers = () => {
  let shuffledArr = [...numbersArr];
  shuffledArr.sort(() => Math.random() - 0.5);
  generateNumberDivs(shuffledArr);
};

const sortNumbers = () => {
  generateNumberDivs(numbersArr);
};

const generateNumberDivs = (numbersArr) => {
  const containerDiv = document.getElementById("data-container");
  containerDiv.innerHTML = "";
  for (let i = 0; i < numbersArr.length; i++) {
    let numberDivContainer = document.createElement("div");
    numberDivContainer.className = "numberContainer";

    let numberPrependDiv = document.createElement("div");
    numberPrependDiv.className = "numberPrepend";

    let numberDiv = document.createElement("div");
    numberDiv.innerText = numbersArr[i];
    numberDiv.className = "number";

    numberDivContainer.appendChild(numberPrependDiv);
    numberDivContainer.appendChild(numberDiv);

    containerDiv.appendChild(numberDivContainer);
  }
};
