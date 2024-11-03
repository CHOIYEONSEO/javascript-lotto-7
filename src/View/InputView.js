import { Console } from "@woowacourse/mission-utils";

class InputView {
  constructor() { }

  static async readBudget() {
    const BUDGET = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return BUDGET;
  }

  static async readWinnig() {
    const NUMBER = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    return NUMBER;
  }

  static async readBonus() {
    const NUMBER = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
    return NUMBER;
  }

}

export default InputView;