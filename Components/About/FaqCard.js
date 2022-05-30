import { useEffect, useState } from "react";

export default function FAQCard(props) {
  const question = props.question;
  const answer = props.answer;

  const [item, setitem] = useState({
    icon: "far fa-plus",
    answerClass: "",
  });

  const toggleQuestion = () => {
    if (item.answerClass == "opened")
      setitem({ icon: "far fa-plus", answerClass: "" });
    else setitem({ icon: "far fa-minus", answerClass: "opened" });
  };

  return (
    <div className="faqCard">
      <div className={`question ${item.answerClass}`}>
        <h6>{question}</h6>
        <i className={item.icon} onClick={() => toggleQuestion()} />
      </div>
      <div className={`answer ${item.answerClass}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}
