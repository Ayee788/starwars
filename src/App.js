import './App.css';
import { Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import People from './components/People';
import Planets from './components/Planets';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Create/>}></Route>
        <Route path='/people/:id' element={<><Create/><People/></>}></Route>
        <Route path='/planets/:id' element={<><Create/><Planets/></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
