import Summary from "./Summary";
import Metrics from "./Metrics";
import Rewards from "./Rewards";
import Pledges from "./Pledges";

import { useState } from "react";

function Main() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <main>
      <Summary
        title="Mastercraft Bamboo Monitor Riser"
        description="A beautifully handcrafted monitor stand to reduce neck and eye strain."
        openModal={openModal}
      />
      <Metrics />
      <Rewards openModal={openModal} />
      <Pledges show={showModal} onClose={closeModal} />
    </main>
  );
}

export default Main;
