import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { StandardLayout } from "./layouts";
import { HomePage } from "./pages";

function App() {
  return (
    <Router>
      {/* Will be Router here */}
      <StandardLayout>
        <HomePage />
      </StandardLayout>
    </Router>
  );
}

export default App;
