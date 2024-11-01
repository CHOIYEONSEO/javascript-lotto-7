// 로또 validate와 중복됨
export default function bonusValidate(number, lotto) {
  properRange(number);
  duplicate(number, lotto);
}

function properRange(number) {
  if (number < 1 || number > 45 ) {
    const ERROR_MESSAGE = `[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.(Not Proper Range: ${number})`;
    throw new Error(ERROR_MESSAGE);
  }
}

function duplicate(number, lotto) {
  const TARGET = [...lotto, number]
  const CHECK = new Set(TARGET);

  if (TARGET.length != CHECK.size) {
    const ERROR_MESSAGE = `[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 숫자여야 합니다.(Duplicate: ${number})`;
    throw new Error(ERROR_MESSAGE);
  }
}