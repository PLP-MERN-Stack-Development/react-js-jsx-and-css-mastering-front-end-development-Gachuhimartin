import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import TaskManager from "./pages/TaskManager";
import ApiList from "./pages/ApiList";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/api" element={<ApiList />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;