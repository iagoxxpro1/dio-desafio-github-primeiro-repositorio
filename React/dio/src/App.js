import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
} from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import {Feed} from './pages/feed'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
