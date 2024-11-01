import { Random } from "@woowacourse/mission-utils";

export default function generateLotto(value) {
  const PURCHASE_NUMBER = calculateCount(value);
  const LOTTO_TICKETS = [];

  for(let i = 0; i < PURCHASE_NUMBER; i++) {
    const LOTTO_NUMBER = pickNumbers();
    LOTTO_TICKETS.push(LOTTO_NUMBER);
  }

  return LOTTO_TICKETS;
}

function calculateCount(value) {
  const UNIT = 1000;

  return value / UNIT;
}

function pickNumbers() {
  return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
}