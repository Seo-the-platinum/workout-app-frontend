import logo from './logo.svg';
import './App.css';
import Home from './views/Home'
import Record from './views/Record'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit' element={<Record/>}/>
      </Routes>
    </div>
  );
}

export default App;
