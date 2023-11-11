import "./styles/css/index.css";
import Balance from "./components/Balance";
import Chart from "./components/Chart";

function ExpensesChart() {
  return (
    <div className="expenses-chart">
      <Balance />
      <Chart />
    </div>
  );
}

export default ExpensesChart;
