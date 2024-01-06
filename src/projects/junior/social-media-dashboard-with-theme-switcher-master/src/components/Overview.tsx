import stats from "../data/interactions";

import Stat from "./Stat";

function Overview() {
  return (
    <article className="overview">
      <h1>Overview - Today</h1>
      <div className="stats">
        {stats.map((stat) => (
          <Stat key={stat.id} stat={stat} />
        ))}
      </div>
    </article>
  );
}

export default Overview;
