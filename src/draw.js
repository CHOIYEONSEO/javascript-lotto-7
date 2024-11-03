import InputView from "./View/InputView.js";
import winningValidate from "./Model/winnigValidate.js";
import OutputView from "./View/OutputView.js";
import bonusValidate from "./Model/bonusValidate.js";

export async function drawNumbers() {
  while (true) {
    const NUMBERS = await InputView.readWinnig();

    try {
      const WINNING_NUMBER = winningValidate(NUMBERS);
      return WINNING_NUMBER;

    } catch (error) {
      OutputView.printError(error);
    }
  }
}

export async function drawBonus(lotto) {
  while (true) {
    let bonusNumber = await InputView.readBonus();

    try {
      bonusNumber = bonusValidate(bonusNumber, lotto);
      return bonusNumber;

    } catch (error) {
      OutputView.printError(error);
    }
  }
}