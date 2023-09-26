import faqData from "../data/faq.json";
import Question from "./Question";

import { useState } from "react";

function FaqSection({ viewMode }: { viewMode: string }) {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  function toggleQuestion(id: string) {
    setActiveQuestion((previous) => {
      if (id === previous) return null;
      else return id;
    });
  }

  const className = `faq ${viewMode}`;

  return (
    <article className={className}>
      <h1>FAQ</h1>
      {faqData.map((data) => (
        <Question
          key={data.id}
          data={data}
          onClick={toggleQuestion}
          isActive={activeQuestion === data.id}
        />
      ))}
    </article>
  );
}

export default FaqSection;
