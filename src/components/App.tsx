import IntroCard from './pages/IntroCard';
import Projects from './pages/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroCard />}>
          <Route index element={<IntroCard />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
      
      
    </BrowserRouter>
  );
}
