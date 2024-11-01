export default function budgetValidate(input) {
  isZero(input);
  isNegative(input);
  properUnit(input);
}

function isZero(input) {
  if (input == 0) {
    const ERROR_MESSAGE = `[ERROR] 구매 금액은 0이 아니어야 합니다.(Zero Budget: ${input})`;
    throw new Error(ERROR_MESSAGE);
  }
}

function isNegative(input) {
  if (input < 0) {
    const ERROR_MESSAGE = `[ERROR] 구매 금액은 양수여야 합니다.(Negative Budget: ${input})`;
    throw new Error(ERROR_MESSAGE);
  }  
}

function isMultipleOfThousand(amount) {
  const THOUSAND = 1000;
  return amount % THOUSAND === 0;
}

function properUnit(input) {
  if (!isMultipleOfThousand(input)) {
    const ERROR_MESSAGE = `[ERROR] 구매 금액은 1000원 단위여야 합니다.(Not Multiple of 1000: ${input})`;
    throw new Error(ERROR_MESSAGE);
  }
}



