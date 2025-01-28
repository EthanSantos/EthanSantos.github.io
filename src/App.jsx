import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfileCard from './components/ProfileCard';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Experience from './pages/Experience';
import NotFound from './pages/NotFound';

import Aimstars from './pages/ProjectArticle/Aimstars';
import PharmaScan from './pages/ProjectArticle/Pharmascan';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <ProfileCard />
          <NavigationBar />
          <main>
            <Routes>
              <Route path="/" element={<Navigate to="/about" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="*" element={<NotFound />} />

              <Route path="aimstars" element={<Aimstars />} />
              <Route path="pharmascan" element={<PharmaScan />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;