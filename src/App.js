import { Random, Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Winning from "./Winning.js";
import Match from "./Match.js";
import InputView from "./View/InputView.js";
import InputValidate from "./Model/InputValidate.js";
import budgetValidate from "./Model/BudgetValidate.js";
import OutputView from "./View/OutputView.js";
import generateLotto from "./Model/generateLotto.js";
import bonusValidate from "./Model/bonusValidate.js";
// Console.readLineAsync() / Console.print() / Random.pickUniqueNumbersInRange(1, 45, 6)

// 로또 번호의 숫자 범위는 1~45까지이다.
// 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
// 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
// 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
// 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.

class App {
  async run() {
    let budget;
    let winningNumber;
    let bonusNumber;
//    const BUDGET_UNIT = 1000;
    
    while (true) {
      const BUDGET = await InputView.readBudget();

      try {
        budget = new InputValidate(BUDGET).input;
        budgetValidate(budget);
        break;

      } catch (error) {
        Console.print(error.message);
      }
    }
    
//    const PURCHASE_NUMBER = budget / BUDGET_UNIT;
    const LOTTO_TICKETS = generateLotto(budget);
    OutputView.printTickets(LOTTO_TICKETS);

    while (true) {
      winningNumber = [];
      const WINNING_NUMBER = await InputView.readWinnig();

      try {
        WINNING_NUMBER.split(",").forEach((element, idx) => {
          winningNumber.push(new InputValidate(element).input);
        });
        const WINNING_LOTTO = new Lotto(winningNumber);
        break;

      } catch (error) {
        Console.print(error.message);
      }
    }

//    const WINNING_NUMBER = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    OutputView.printBlankLine();

    while (true) {
      const BONUS_NUMBER = await InputView.readBonus();

      try {
        bonusNumber = new InputValidate(BONUS_NUMBER).input;
        bonusValidate(bonusNumber, winningNumber); //메서드 작성
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    const WINNING_LOTTO = new Winning(winningNumber, bonusNumber);
//    const BONUS_NUMBER = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    Console.print("");

//    const WINNING_LOTTO = new Winning(WINNING_NUMBER.split(","), BONUS_NUMBER);
    const PURCHASE_NUMBER = LOTTO_TICKETS.length;
    Console.print("당첨 통계\n---");
    const PRICE = [5000, 50000, 1500000, 30000000, 2000000000];
    const MATCH = PRICE.map((price) => new Match(price));
    
    for(let i = 0; i < PURCHASE_NUMBER; i++) {
      Winning.match(MATCH, LOTTO_TICKETS[i], WINNING_LOTTO);
    }

    Console.print(`3개 일치 (5,000원) - ${MATCH[0].count}개`);
    Console.print(`4개 일치 (50,000원) - ${MATCH[1].count}개`);
    Console.print(`5개 일치 (1,500,000원) - ${MATCH[2].count}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${MATCH[3].count}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${MATCH[4].count}개`);

    const PROFIT = MATCH.reduce((acc, cur, index) => {
      cur = MATCH[index].price * MATCH[index].count;
      return acc + cur;
    }, 0);
    
    const PROFIT_RATE = ((PROFIT / budget) * 100).toFixed(1);
    Console.print(`총 수익률은 ${PROFIT_RATE}%입니다.`);
    


  }
}

export default App;
