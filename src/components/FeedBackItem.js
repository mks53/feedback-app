import React from "react";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

function FeedBackItem({ item, handleDelete }) {
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="antiquewhite" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedBackItem;
