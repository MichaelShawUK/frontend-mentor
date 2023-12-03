import data from "./data.json";

type Category = "Work" | "Play" | "Study" | "Exercise" | "Social" | "Self Care";
export interface TimeData {
  title: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
}

function getData(category: Category) {
  return data.find((item) => item.title === category);
}

export default getData;
