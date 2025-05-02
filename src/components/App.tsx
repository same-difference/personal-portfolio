import Layout from './layouts/layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
    </>
  );
}
