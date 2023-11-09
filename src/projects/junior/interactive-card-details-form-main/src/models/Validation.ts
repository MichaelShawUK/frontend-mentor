class Validation {
  value = "";
  error = "";
  validateFns: Array<() => void> = [];

  isNotEmpty() {
    this.validateFns.push(() => {
      if (this.value.trim().length === 0) this.error = "Can't be blank";
      else this.error = "";
    });
    return this;
  }

  isAlpha() {
    this.validateFns.push(() => {
      const alphaRegex = new RegExp(/^[A-Za-z ]*$/);
      if (!alphaRegex.test(this.value.trim())) {
        this.error = "Wrong format, letters only";
      }
    });
    return this;
  }

  isNumber() {
    this.validateFns.push(() => {
      const numberRegex = new RegExp(/^\d[\d ]*$/);
      if (!numberRegex.test(this.value.trim())) {
        this.error = "Wrong format, numbers only";
      }
    });
    return this;
  }

  isLength(n: number) {
    this.validateFns.push(() => {
      const removeWhitespace = this.value.split(" ").join("");
      if (removeWhitespace.length !== n) {
        this.error = `Must be ${n} characters`;
      }
    });
    return this;
  }

  isGreaterThan(n: number) {
    this.validateFns.push(() => {
      if (parseInt(this.value.trim()) <= n) {
        this.error = `Must be greater than ${n}`;
      }
    });
    return this;
  }

  isLessThan(n: number) {
    this.validateFns.push(() => {
      if (parseInt(this.value.trim()) >= n) {
        this.error = `Must be less than ${n}`;
      }
    });
    return this;
  }

  validate(value: string) {
    this.value = value;
    for (let i = 0; i < this.validateFns.length; i++) {
      this.validateFns[i].call(this);
      if (this.error) break;
    }
  }
}

export default Validation;
