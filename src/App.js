import './App.css';
import AddFood from './components/addFood';
import ShowFood from './components/showFood';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar">
          <Link to="/addFood"> <h3>Add Food</h3> </Link>
          <Link to="/showFood"> <h3>Show Food</h3> </Link>
        </nav>
        <Routes>
          <Route path="/" element={<AddFood/>}/>
          <Route path="/addFood" element={<AddFood/>}/>
          <Route path="/showFood" element={<ShowFood/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
