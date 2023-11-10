class Validation {
  validateFns: Array<(value: string) => string | null> = [];

  isNotEmpty() {
    this.validateFns.push((value) => {
      if (value.trim().length === 0) return "Can't be blank";
      else return null;
    });
    return this;
  }

  isAlpha() {
    this.validateFns.push((value) => {
      const alphaRegex = new RegExp(/^[A-Za-z ]*$/);
      if (!alphaRegex.test(value.trim())) {
        return "Wrong format, letters only";
      } else return null;
    });
    return this;
  }

  isNumber() {
    this.validateFns.push((value) => {
      const numberRegex = new RegExp(/^\d[\d ]*$/);
      if (!numberRegex.test(value.trim())) {
        return "Wrong format, numbers only";
      } else return null;
    });
    return this;
  }

  isLength(n: number) {
    this.validateFns.push((value) => {
      const removeWhitespace = value.split(" ").join("");
      if (removeWhitespace.length !== n) {
        return `Must be ${n} characters`;
      } else return null;
    });
    return this;
  }

  isGreaterThan(n: number) {
    this.validateFns.push((value) => {
      if (parseInt(value.trim()) <= n) {
        return `Must be greater than ${n}`;
      } else return null;
    });
    return this;
  }

  isLessThan(n: number) {
    this.validateFns.push((value) => {
      if (parseInt(value.trim()) >= n) {
        return `Must be less than ${n}`;
      } else return null;
    });
    return this;
  }

  validate(value: string) {
    for (let i = 0; i < this.validateFns.length; i++) {
      const error = this.validateFns[i](value);
      if (error) {
        return error;
      }
    }
  }
}

export default Validation;
