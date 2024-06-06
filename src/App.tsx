import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Home from './Pages/Home';
import { Connect } from './Pages/Home/connect';
import { AboutMe } from './Pages/Home/about';
import NotFound from './Pages/Home/notFound';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
