import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedBackItem from "./FeedBackItem";

function App() {
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
                <FeedBackItem />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
