class Winning {
    #numbers;
    #bonus;

    constructor(numbers, bonus) {
      this.#numbers = numbers;
      this.#bonus = bonus;
    }

    static match(object, target, answer) {
      const MATCH_COUNT = {
        numbers : 0,
        bonus : false,
      };

      MATCH_COUNT.numbers = this.includeNumbers(target, answer);
      MATCH_COUNT.bonus = this.includeBonus(target, answer);
      this.updateCount(MATCH_COUNT.numbers, MATCH_COUNT.bonus, object);
    }

    static includeNumbers(target, answer) {
      let count = 0;

      answer.#numbers.forEach((number) => {
        if (target.includes(number)) {
          count += 1;
        }
      });

      return count;
    }

    static includeBonus(target, answer) {
      return target.includes(answer.#bonus);
    }

    static updateCount(value, bonus, object) {
      if (value == 3) {
        object[0].count += 1;
      }

      if (value == 4) {
        object[1].count += 1;
      }

      if (value == 5) {
        if (!bonus) {
          object[2].count += 1;
        } else {
          object[3].count += 1;
        }
      }

      if (value == 6) {
        object[4].count += 1;
      }
    }
    
}

export default Winning;
