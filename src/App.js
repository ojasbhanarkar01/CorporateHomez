import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Create from "./components/Create";
import Browse from "./components/Browse";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/browse" element={<Browse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
