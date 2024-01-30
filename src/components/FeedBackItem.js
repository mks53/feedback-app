import React, { useContext } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedBackContext";

function FeedBackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="antiquewhite" />
      </button>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="antiquewhite" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedBackItem;
