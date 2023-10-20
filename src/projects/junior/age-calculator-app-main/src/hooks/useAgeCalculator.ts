import { useState } from "react";

function calculateAge(birthDate: Date) {
  const now = new Date();
  const diff = new Date(now.getTime() - birthDate.getTime());

  const age = {
    years: (diff.getUTCFullYear() - 1970).toString(),
    months: diff.getUTCMonth().toString(),
    days: (diff.getUTCDate() - 1).toString(),
  };

  return age;
}

function isLeapYear(year: number) {
  const divisibleBy4 = Boolean(!(year % 4));
  const divisibleBy100 = Boolean(!(year % 100));
  const divisbleBy400 = Boolean(!(year % 400));

  return divisbleBy400 || (divisibleBy4 && !divisibleBy100);
}

function validate(userInput: { day: string; month: string; year: string }) {
  const error = {
    day: "",
    month: "",
    year: "",
  };

  const ERROR = {
    REQUIRED: "This field is required",
    INVALID_DATE: "Must be a valid date",
    INVALID_MONTH: "Must be a valid month",
    INVALID_YEAR: "Must be a valid year",
    FUTURE: "Must be in the past",
  };

  if (userInput.day.trim().length === 0) error.day = ERROR.REQUIRED;
  if (userInput.month.trim().length === 0) error.month = ERROR.REQUIRED;
  if (userInput.year.trim().length === 0) error.year = ERROR.REQUIRED;

  if (!Number.isInteger(+userInput.day)) error.day = ERROR.INVALID_DATE;
  if (!Number.isInteger(+userInput.month)) error.month = ERROR.INVALID_MONTH;
  if (!Number.isInteger(+userInput.year)) error.year = ERROR.INVALID_YEAR;

  if (+userInput.day < 1 || +userInput.day > 31) {
    error.day = ERROR.INVALID_DATE;
  }
  if (+userInput.month < 1 || +userInput.month > 12) {
    error.month = ERROR.INVALID_MONTH;
  }
  if (+userInput.year < 10) error.year = ERROR.INVALID_YEAR;

  if (["4", "6", "9", "11"].includes(userInput.month)) {
    if (+userInput.day > 30) error.day = ERROR.INVALID_DATE;
  }
  if (userInput.month === "2") {
    if (isLeapYear(+userInput.year) && +userInput.day > 29) {
      error.day = ERROR.INVALID_DATE;
    }
    if (!isLeapYear(+userInput.year) && +userInput.day > 28) {
      error.day = ERROR.INVALID_DATE;
    }
  }

  if (error.day || error.month || error.year) return error;

  const birthDate = new Date(
    +userInput.year,
    +userInput.month - 1,
    +userInput.day
  );
  const now = new Date();

  if (birthDate > now) {
    if (+userInput.year > now.getUTCFullYear()) {
      error.year = ERROR.FUTURE;
    } else if (+userInput.month > now.getUTCMonth() + 1) {
      error.month = ERROR.FUTURE;
    } else if (+userInput.day > now.getUTCDate()) {
      error.day = ERROR.FUTURE;
    }
  }

  return error;
}

interface IUserInput {
  day: string;
  month: string;
  year: string;
}

function useAgeCalculator() {
  const noErrors = { day: "", month: "", year: "" };
  const initialAge = { years: "--", months: "--", days: "--" };

  const [age, setAge] = useState(initialAge);
  const [error, setError] = useState(noErrors);

  function checkUserInput(userInput: IUserInput) {
    const birthDate = new Date(
      +userInput.year,
      +userInput.month - 1,
      +userInput.day
    );

    const validated = validate(userInput);
    if (!validated.day && !validated.month && !validated.year) {
      setAge(calculateAge(birthDate));
      setError(noErrors);
    } else {
      setError(validated);
      setAge(initialAge);
    }
  }

  return { age, error, checkUserInput };
}

export default useAgeCalculator;
