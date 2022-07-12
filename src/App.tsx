import './App.scss';
import { Route, Routes } from 'react-router-dom';
import GarageList from './pages/GarageList';
import HomePage from './pages/HomePage';
import NewCar from './pages/NewCar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={HomePage()} />
        <Route path='/mycars' element={GarageList()} />
        <Route path='/newcar' element={NewCar()} />
        <Route path='/edit/:id' element={NewCar()} />
      </Routes>
    </div>
  );
}

export default App;
