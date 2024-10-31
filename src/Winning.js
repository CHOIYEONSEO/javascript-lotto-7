class Winning {
    #numbers;
    #bonus;

    constructor(numbers, bonus) {
      this.#validateNumbers(numbers);
      this.#numbers = numbers;
      this.#validateBonus(bonus);
      this.#bonus = bonus;
    }

    #validateNumbers(numbers) {
      if (numbers.length !== 6) {
        throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
      }
    }

    #validateBonus(bonus) {
      if (bonus.length !== 1) {
        throw new Error("[ERROR] 보너스 번호는 1개여야 합니다.");
      }
    }


}

export default Winning;
