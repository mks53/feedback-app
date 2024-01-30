import React, { useContext } from "react";
import FeedBackItem from "./FeedBackItem";
import FeedbackContext from "../context/FeedBackContext";

function FeedBackList() {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <h1>No Feedback Yet</h1>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedBackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedBackList;
