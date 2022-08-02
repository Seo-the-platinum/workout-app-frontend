import Home from './views/Home'
import AddRecord from './views/AddRecord'
import EditRecord from './views/EditRecord'
import { Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit' element={<EditRecord/>}/>
        <Route path='/add' element={<AddRecord/>}/>
      </Routes>
    </div>
  );
}

export default App;
