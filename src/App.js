import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from './Pages';


function App() {
  return (
    <div className='background-container'>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={ <Index />}> </Route>
        </Routes>
      </div>
    </Router>
  </div>
  );
}

export default App;
