import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Library from './pages/Library';
import MaqamDetail from './pages/MaqamDetail';
import Rhythms from './pages/Rhythms';
import Lessons from './pages/Lessons';
import About from './pages/About';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library?family=:familyId" element={<Library />} />
          <Route path="/maqam/:maqamId" element={<MaqamDetail />} />
          <Route path="/rhythms" element={<Rhythms />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/:lessonId" element={<Lessons />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;