import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
} from "react-router-dom";

import { HomeCadastro } from "./pages/HomeCadastro"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeCadastro />} />
      </Routes>
    </Router>
  );
}

export default App;