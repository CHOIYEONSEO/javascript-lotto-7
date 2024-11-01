import { Console } from "@woowacourse/mission-utils";

class InputView {
    constructor() {}

    static async readBudget() {
        const BUDGET = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
        return BUDGET;
    }

}

export default InputView;