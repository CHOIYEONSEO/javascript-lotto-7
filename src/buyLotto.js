import InputView from "./View/InputView.js";
import budgetValidate from "./Model/budgetValidate.js";
import OutputView from "./View/OutputView.js";
import autoGenerate from "./Model/autoGenerate.js";

export default async function buyLotto() {
  while (true) {
    let budget = await InputView.readBudget();

    try {
      budget = budgetValidate(budget);
      const LOTTO_TICKETS = autoGenerate(budget);
      OutputView.printTickets(LOTTO_TICKETS);
      return { budget, LOTTO_TICKETS };

    } catch (error) {
      OutputView.printError(error);
    }
  }
}