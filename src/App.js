import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Create from './pages/Create/Create';
import Next from './pages/Create/Next';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
        <Route path='/event' element={<Next></Next>}></Route>
      </Routes>
    </div>
  );
}

export default App;
