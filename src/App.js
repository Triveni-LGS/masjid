import logo from './logo.svg';
import './App.css';

import HomePageMain from './components/Home/HomePageMain';
import MasidRegister from './components/MasjidRegister';
import { Route, Routes } from 'react-router-dom';
import MasjidLogin from './components/MasjidLogin';
import SalahTimingTable from './components/SalahTimingTable';
import AskQuestion from './components/AskQuestion';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePageMain />}
      />
      <Route
        path="/register"
        element={<MasidRegister />}
      />
      <Route path="/login" element={<MasjidLogin/>}/>
      <Route path="/table" element={<SalahTimingTable/>}/>
      <Route path="/ask" element={<AskQuestion/>}/>
    </Routes>
  )
}

export default App;
