import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Addbook from './components/crud/Addbook';
import Editbook from './components/crud/Editbook';
import Deletebook from './components/crud/Deletebook';
import Showbook from './components/crud/Showbook';

function App() {
  return (
    <div className="App">
        <Router>
      <Header></Header>
      <Routes>
      <Route element={<Showbook/>} path="/"/>
      <Route element={<Addbook/>} path="/addbook"/>
      <Route element={<Editbook/>} path="/editbook"/>
      <Route element={<Deletebook/>} path="/deletebook"/>
      </Routes>
      </Router> 
    </div>
  );
}

export default App;
