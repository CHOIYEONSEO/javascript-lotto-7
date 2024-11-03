export default function inputValidate(input) {
  isEmpty(input);
  isNumber(input);

  return Number(input);
}

function isEmpty(input) {
  if (!input) {
    const ERROR_MESSAGE = `[ERROR] 값을 입력해야 합니다.(Empty Input)`;
    throw new Error(ERROR_MESSAGE);
  }
}

function isNumber(input) {
  if (isNaN(input)) { // 당첨 번호가 ,로 구분되지 않는것까지 여기 에러로 처리됨., 보너스 번호가 여러개 입력되는 것까지 여기 에러로 처리됨.
    const ERROR_MESSAGE = `[ERROR] 숫자를 입력해야 합니다.(Not Number: ${input})`;
    throw new Error(ERROR_MESSAGE);
  }
}