import CardFront from "./CardFront";
import CardBack from "./CardBack";
import useViewMode from "../hooks/useViewMode";

function InteractiveCards() {
  const viewMode = useViewMode();
  const className =
    viewMode === "MOBILE"
      ? "interactive-cards mobile"
      : "interactive-cards desktop";

  return (
    <div className={className}>
      <CardFront />
      <CardBack />
    </div>
  );
}

export default InteractiveCards;
