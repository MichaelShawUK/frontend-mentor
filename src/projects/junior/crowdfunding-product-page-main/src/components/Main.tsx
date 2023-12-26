import Summary from "./Summary";
import Metrics from "./Metrics";
import Rewards from "./Rewards";
import Pledges from "./Pledges";

function Main() {
  return (
    <main>
      <Summary
        title="Mastercraft Bamboo Monitor Riser"
        description="A beautifully handcrafted monitor stand to reduce neck and eye strain."
      />
      <Metrics />
      <Rewards />
      <Pledges />
    </main>
  );
}

export default Main;
