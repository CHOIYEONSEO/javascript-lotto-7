import Match from "./Match.js";
import calculateProfit from "./Model/calculateProfit.js";
import OutputView from "./View/OutputView.js";

export default function win(lotto, answer, bonus) {
  const PRICE = [5000, 50000, 1500000, 30000000, 2000000000];
  const WINNIG_STATUS = PRICE.map((price) => new Match(price));

  lotto.LOTTO_TICKETS.forEach(element => {
    const { MATCHING_COUNT, HAS_BONUS } = checkMatch(element, answer, bonus);

    updateCount(MATCHING_COUNT, HAS_BONUS, WINNIG_STATUS);
  });

  OutputView.printMatch(WINNIG_STATUS);
  const PROFIT_RATE = calculateProfit(WINNIG_STATUS, lotto.budget);
  OutputView.printProfit(PROFIT_RATE);
}

function updateCount(value, hasVal, array) {
  const INDEX = findIndex(value, hasVal);
  if (!isNaN(INDEX)) {
    array[INDEX].count += 1;
  }
}

function checkMatch(element, answer, bonus) {
  const MATCHING_COUNT = countMatches(element, answer);
  const HAS_BONUS = hasBonus(element, bonus);

  return { MATCHING_COUNT, HAS_BONUS };
}

// 당첨 번호와 몇 개 일치하는지 계산
function countMatches(target, answer) {
  let matchingCount = 0;

  for (let i = 0; i < answer.length; i++) {
    matchingCount += includeNumber(target, answer[i]);
  }

  return matchingCount;
}

function includeNumber(target, number) {
  if (target.includes(number)) {
    return 1;
  }

  return 0;
}

function hasBonus(target, bonus) {
  if (includeNumber(target, bonus) === 1) return true;

  return false;
}

function findIndex(value, hasVal) {
  if (value === 3) return 0;

  if (value === 4) return 1;

  if (value === 5) {
    if (!hasVal) return 2;

    return 3;
  }

  if (value === 6) return 4;
}