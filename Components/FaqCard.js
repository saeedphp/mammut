import { useEffect, useState } from "react";

export default function FAQCard(props) {
  const question = props.question;
  const answer = props.answer;

  const [item, setitem] = useState({
    icon: "far fa-arrow-left",
    answerClass: "answer",
  });

  const toggleQuestion = () => {
    if (item.answerClass == "answer opened")
      setitem({ icon: "far fa-arrow-left", answerClass: "answer" });
    else setitem({ icon: "far fa-arrow-right", answerClass: "answer opened" });
  };

  return (
    <div className={`faqCard ${item.answerClass}`}>
      <div className="question">
        <h6>{question}</h6>
        <i className={item.icon} onClick={() => toggleQuestion()} />
      </div>
      <div className={item.answerClass}>
        <p>{answer}</p>
      </div>
    </div>
  );
}
