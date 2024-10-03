import IntroCard from './pages/IntroCard';
import Projects from './pages/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"

export default function App() {

  return (
    <>
    <Analytics />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroCard />}>
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
