import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedBackStats from "./components/FeedBackStats";
import FeedBackForm from "./components/FeedBackForm";
import Contact from "./components/Contact";
import Button from "./components/shared/Button";
import { FeedbackProvider } from "./context/FeedBackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <FeedBackForm />
                <FeedBackStats />
                <FeedBackList />
              </div>
            }
          />
          <Route path="/about" element={<Contact />} />
        </Routes>
        <Button version={"primary"}>Contact</Button>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
