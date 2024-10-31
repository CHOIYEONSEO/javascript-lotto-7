import { Random, Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
// Console.readLineAsync() / Console.print() / Random.pickUniqueNumbersInRange(1, 45, 6)

// 로또 번호의 숫자 범위는 1~45까지이다.
// 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
// 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
// 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
// 1등: 6개 번호 일치 / 2,000,000,000원
// 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
// 3등: 5개 번호 일치 / 1,500,000원
// 4등: 4개 번호 일치 / 50,000원
// 5등: 3개 번호 일치 / 5,000원
// 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
// 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.

class App {
  async run() {
    const amount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const amountUnit = 1000;
    const purchasedNumber = amount / amountUnit;

    Console.print(`${purchasedNumber}개를 구입했습니다.`);
    const LOTTO_NUMBERS = [];
    for(let i = 0; i < purchasedNumber; i++) {
      const LOTTO_NUMBER = Lotto.generate().sort((a, b) => a - b);
      Console.print(LOTTO_NUMBER);
      LOTTO_NUMBERS.push(LOTTO_NUMBER);
    }
    Console.print("");

    const WINNING_NUMBER = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const WINNING_LOTTO = new Lotto(WINNING_NUMBER.split(","));
    Console.print("");

    const BONUS_NUMBER = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    Console.print("");


    

    


  }
}

export default App;
