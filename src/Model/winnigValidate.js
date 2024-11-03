import inputValidate from "./inputValidate.js";
import Lotto from "../Lotto.js";

export default function winningValidate(numbers) {
  let winningNumber = splitNumbers(numbers);

  winningNumber = eachValidate(winningNumber);
  numbersValidate(winningNumber);

  return winningNumber;
}

function splitNumbers(numbers) {
  const DELIMITER = ","
  return numbers.split(DELIMITER);
}

function eachValidate(array) {
  array.forEach((element, idx) => {
    array[idx] = inputValidate(element);
  });

  return array;
}

function numbersValidate(array) {
  const WINNING_LOTTO = new Lotto(array);
}