class InputValidate {
  constructor(input) {
    this.#isEmpty(input);
    this.input = this.#isNumber(input);
  }

  #isEmpty(input) {
    if (!input) {
      const ERROR_MESSAGE = `[ERROR] 값을 입력해야 합니다.(Empty Input)`;
      throw new Error(ERROR_MESSAGE);
    }
  }

  #isNumber(input) {
    if (isNaN(input)) {
      const ERROR_MESSAGE = `[ERROR] 숫자를 입력해야 합니다.(Not Number: ${input})`;
      throw new Error(ERROR_MESSAGE);
    }

    return Number(input);
  }
}

export default InputValidate;