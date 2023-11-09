class Validation {
  value = "";
  error = "";
  validateFns: Array<() => void> = [];

  isNotEmpty() {
    this.validateFns.push(() => {
      if (this.value.trim().length === 0) this.error = "Can't be blank";
    });
    return this;
  }

  isAlpha() {
    this.validateFns.push(() => {
      const alphaRegex = new RegExp(/^[A-Za-z]+\s?[A-Za-z]+$/);
      if (!alphaRegex.test(this.value.trim())) {
        this.error = "Wrong format, letters only";
      }
    });
    return this;
  }

  isNumber() {
    this.validateFns.push(() => {
      const numberRegex = new RegExp(/^\d+$/);
      if (!numberRegex.test(this.value.trim())) {
        this.error = "Wrong format, numbers only";
      }
    });
    return this;
  }

  isLength(n: number) {
    this.validateFns.push(() => {
      if (this.value.trim().length !== n) {
        this.error = `Must be ${n} characters`;
      }
    });
    return this;
  }

  isGreaterThan(n: number) {
    this.validateFns.push(() => {
      if (parseInt(this.value.trim()) <= n) {
        this.error = `Value must be greater than ${n}`;
      }
    });
    return this;
  }

  isLessThan(n: number) {
    this.validateFns.push(() => {
      if (parseInt(this.value.trim()) >= n) {
        this.error = `Value must be less than ${n}`;
      }
    });
    return this;
  }

  validate(value: string) {
    this.value = value;
    console.log(this);
    for (let i = 0; i < this.validateFns.length; i++) {
      this.validateFns[i].call(this);
      if (this.error) break;
    }
    console.log(this);
  }
}

export default Validation;
