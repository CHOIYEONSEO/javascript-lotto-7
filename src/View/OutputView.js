import { Console } from "@woowacourse/mission-utils"; 

class OutputView {
    constructor() {}

    static printBlankLine() {
        Console.print("");
    }

    static printTickets(numbers) {
        const PURCHASE_NUMBER = numbers.length;

        this.printBlankLine();

        Console.print(`${PURCHASE_NUMBER}개를 구매했습니다.`);
        numbers.forEach(number => {
            Console.print(number);
        });

        this.printBlankLine();
    }
    
}

export default OutputView;