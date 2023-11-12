import Total from "./Total";
import DataPoint from "./DataPoint";
import data from "../data/data.json";

function Chart() {
  console.log(data);
  const weeklyTotal = data
    .map((spending) => spending.amount)
    .reduce((accumulator, current) => (accumulator += current));

  const percentageSpending = data.map((spending) => {
    return {
      ...spending,
      percentage: Math.round((spending.amount / weeklyTotal) * 1000) / 10,
    };
  });

  console.log(percentageSpending);
  return (
    <div className="chart">
      <h3>Spending - Last 7 days</h3>
      <div className="data-points">
        {percentageSpending.map((data, index) => (
          <DataPoint data={data} key={index} />
        ))}
      </div>
      <Total />
    </div>
  );
}

export default Chart;
