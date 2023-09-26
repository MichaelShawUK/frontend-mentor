import { IFaqData } from "../data/types";
import { motion } from "framer-motion";

function Question({
  data,
  onClick,
  isActive,
}: {
  data: IFaqData;
  onClick: (id: string) => void;
  isActive: boolean;
}) {
  const className = `question ${isActive ? "active" : ""}`;

  return (
    <motion.div className={className} onClick={() => onClick(data.id)}>
      <h3>{data.question}</h3>
      {isActive && <p>{data.answer}</p>}
    </motion.div>
  );
}

export default Question;
