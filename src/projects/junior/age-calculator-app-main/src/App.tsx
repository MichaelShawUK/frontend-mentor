import arrowIcon from "./assets/images/icon-arrow.svg";
import "./styles/css/index.css";
import InputField from "./components/InputField";
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

  const currentYear = new Date().getUTCFullYear();
  console.log("current year: ", currentYear);

  if (userInput.day.trim().length === 0) error.day = ERROR.REQUIRED;
  if (userInput.month.trim().length === 0) error.month = ERROR.REQUIRED;
  if (userInput.year.trim().length === 0) error.year = ERROR.REQUIRED;

  if (+userInput.day < 1 || +userInput.day > 31) {
    error.day = ERROR.INVALID_DATE;
  }
  if (+userInput.month < 1 || +userInput.month > 12) {
    error.month = ERROR.INVALID_MONTH;
  }
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
  if (+userInput.year < 10) error.year = ERROR.INVALID_YEAR;

  console.log(userInput.year, isLeapYear(+userInput.year));

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

  console.log(now.getUTCDate());

  return error;
}

function AgeCalculator() {
  const [age, setAge] = useState({ years: "--", months: "--", days: "--" });
  const [error, setError] = useState({ day: "", month: "", year: "" });

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const userInput = {
      day: (form[0] as HTMLInputElement).value,
      month: (form[1] as HTMLInputElement).value,
      year: (form[2] as HTMLInputElement).value,
    };

    const birthDate = new Date(
      +userInput.year,
      +userInput.month - 1,
      +userInput.day
    );

    setError(validate(userInput));

    setAge(calculateAge(birthDate));
  }

  return (
    <div className="container">
      <article className="age-calculator">
        <form onSubmit={submitHandler}>
          <div className="fields">
            <InputField label="day" placeholder="DD" error={error.day} />
            <InputField label="month" placeholder="MM" error={error.month} />
            <InputField label="year" placeholder="YYYY" error={error.year} />
          </div>
          <div className="actions">
            <button>
              <img src={arrowIcon} />
            </button>
          </div>
        </form>
        <section className="results">
          <p>
            <span>{age.years}</span> years
          </p>
          <p>
            <span>{age.months}</span> months
          </p>
          <p>
            <span>{age.days}</span> days
          </p>
        </section>
      </article>
    </div>
  );
}

export default AgeCalculator;
