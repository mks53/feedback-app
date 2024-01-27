import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import FeedbackData from "./data/FeedBackData";
import FeedBackList from "./components/FeedBackList";
import FeedBackStats from "./components/FeedBackStats";
import FeedBackForm from "./components/FeedBackForm";
import Contact from "./components/Contact";
import Button from "./components/shared/Button";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <div className="App"></div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedBackForm handleAdd={addFeedback} />
                <FeedBackStats feedback={feedback} />
                <FeedBackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          />
          <Route path="about" element={<Contact />} />
        </Routes>
        <Button version={"primary"}>Contact</Button>
      </Router>
    </>
  );
}

export default App;
