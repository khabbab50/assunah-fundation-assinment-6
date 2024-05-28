// addition
const addintionBuuton = document.querySelector("#addintion-buuton");
const additionInputNumber1 = document.querySelector("#additionInputNumber1");
const additionInputNumber2 = document.querySelector("#additionInputNumber2");
const result = document.querySelector("#result");
addintionBuuton.addEventListener("click", () => {
  const sum1 = additionInputNumber1.value;
  const sum2 = additionInputNumber2.value;
  const sum3 = parseInt(sum1) + parseInt(sum2);
  result.innerText = "Result is : " + sum3;
});
// subtraction
const subtractionBuuton = document.querySelector("#subtraction-buuton");
const subtractionNumber1 = document.querySelector("#subtractionNumber1");
const subtractionNumber2 = document.querySelector("#subtractionNumber2");
subtractionBuuton.addEventListener("click", () => {
  const sub1 = subtractionNumber1.value;
  const sub2 = subtractionNumber2.value;
  const sub3 = parseInt(sub1) - parseInt(sub2);
  result.innerText = "Result is : " + sub3;
});
// division
const divisionBuuton = document.querySelector("#division-buuton");
const divisionNumber1 = document.querySelector("#divisionNumber1");
const divisionNumber2 = document.querySelector("#divisionNumber2");
divisionBuuton.addEventListener("click", () => {
  const div1 = divisionNumber1.value;
  const div2 = divisionNumber2.value;
  const div3 = parseInt(div1) / parseInt(div2);
  console.log(div3);
  result.innerText = "Result is : " + div3;
});
// multiplication
const multiplicationBuuton = document.querySelector("#multiplication-buuton");
const multiplicationNumber1 = document.querySelector("#multiplicationNumber1");
const multiplicationNumber2 = document.querySelector("#multiplicationNumber2");
multiplicationBuuton.addEventListener("click", () => {
  const multi1 = multiplicationNumber1.value;
  const multi2 = multiplicationNumber2.value;
  const multi3 = parseInt(multi1) * parseInt(multi2);
  result.innerText = "Result is : " + multi3;
});
// calculate interest
const interestBuuton = document.querySelector("#interest-buuton");
const interest1 = document.querySelector("#interest1");
const interest2 = document.querySelector("#interest2");
interestBuuton.addEventListener("click", () => {
  const int1 = interest1.value;
  const int2 = interest2.value;
  const int3 = (parseInt(int1) * parseInt(int2)) / 100;
  result.innerText = "Result is : " + int3;
});
// remainder calculation
const remainderBuuton = document.querySelector("#remainder-buuton");
const remainder1 = document.querySelector("#remainder1");
const remainder2 = document.querySelector("#remainder2");
remainderBuuton.addEventListener("click", () => {
  const rem1 = remainder1.value;
  const rem2 = remainder2.value;
  const rem3 = parseInt(rem1) % parseInt(rem2);
  result.innerText = "Result is : " + rem3;
});
// Fahrenheit to Celsius
const fcButton = document.querySelector("#fcButton");
const fcInput = document.querySelector("#fcInput");
const fcResult = document.querySelector("#fcResult");
fcButton.addEventListener("click", () => {
  const fc = fcInput.value;
  const fToc = ((parseInt(fc) - 32) * 5) / 9;
  fcResult.innerText = "Celsius is : " + fToc.toFixed(4);
});
// Celsius to Fahrenheit
const celsiusBuuton = document.querySelector("#celsius-buuton");
const celsius = document.querySelector("#celsius");
celsiusBuuton.addEventListener("click", () => {
  let cel = celsius.value;
  cel = (cel * 9) / 5 + 32;
  fcResult.innerText = "Fahrenheit is : " + cel;
});
// area calculation
const circleBuuton = document.querySelector("#circle-buuton");
const circleInput1 = document.querySelector("#circleInput1");
let areaCalculationResult = document.querySelector("#area-calculation-result");
circleBuuton.addEventListener("click", () => {
  const r = circleInput1.value;
  const pi = Math.PI;
  const r3 = pi * (parseInt(r) * parseInt(r));
  areaCalculationResult.innerText = "Result is : " + r3.toFixed(5);
});
// area rectangle
const rectangleBuuton = document.querySelector("#rectangle-buuton");
const rectangleLenth = document.querySelector("#rectangle-lenth");
const rectangleWidth = document.querySelector("#rectangle-width");
rectangleBuuton.addEventListener("click", () => {
  const rect1 = rectangleLenth.value;
  const rect2 = rectangleWidth.value;
  const rect3 = parseInt(rect1) * parseInt(rect2);
  areaCalculationResult.innerText = "Result is : " + rect3;
});
// Area of Square
const squareBuuton = document.querySelector("#square-buuton");
const squareInput = document.querySelector("#square-input");
squareBuuton.addEventListener("click", () => {
  const squ = squareInput.value;
  const squ2 = parseInt(squ) * parseInt(squ);
  areaCalculationResult.innerText = "Result is : " + squ2;
});
// Area of Triangle
const priangleBuuton = document.querySelector("#priangle-buuton");
const triangleInput1 = document.querySelector("#triangle-input1");
const triangleInput2 = document.querySelector("#triangle-input2");
priangleBuuton.addEventListener("click", () => {
  const tri1 = triangleInput1.value;
  const tri2 = triangleInput2.value;
  const tri3 = (1 / 2) * (parseInt(tri1) * parseInt(tri2));
  areaCalculationResult.innerText = "Result is : " + tri3;
});
// Area of Parallelogram
const parallelogramBuuton = document.querySelector("#parallelogram-buuton");
const parallelogramInput1 = document.querySelector("#parallelogram-input1");
const parallelogramInput2 = document.querySelector("#parallelogram-input2");
parallelogramBuuton.addEventListener("click", () => {
  const pra1 = parallelogramInput1.value;
  const pra2 = parallelogramInput2.value;
  const pra3 = parseInt(pra1) * parseInt(pra2);
  areaCalculationResult.innerText = "Result is : " + pra3;
});
// Area of Rhombus
const rhombusBuuton = document.querySelector("#rhombus-buuton");
const rhombusInput1 = document.querySelector("#rhombus-input1");
const rhombusInput2 = document.querySelector("#rhombus-input2");
rhombusBuuton.addEventListener("click", () => {
  const rho1 = rhombusInput1.value;
  const rho2 = rhombusInput2.value;
  const rho3 = (1 / 2) * (parseInt(rho1) * parseInt(rho2));
  areaCalculationResult.innerText = "Result is : " + rho3;
});
// footer
const footerText = document.querySelector("#footer-text");
const date = new Date().getFullYear();
footerText.innerHTML = `&copy; khabbab 2024 - ${date}`;
