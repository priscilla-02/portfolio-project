import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Home from './Pages/Home';
import { Connect } from './Pages/Home/connect';
import { AboutMe } from './Pages/Home/about';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
