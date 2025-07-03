import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import App1 from './pages/applications/App1';
import DynamicPage1 from './pages/dynamic-pages/DynamicPage1';
import Game1 from './pages/games/Game1';
import StaticPage1 from './pages/static-pages/StaticPage1';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |<Link to="/games/game1">Game 1</Link> |
        <Link to="/applications/app1">App 1</Link> |<Link to="/static/static1">Static Page</Link> |
        <Link to="/dynamic/dynamic1">Dynamic Page</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/game1" element={<Game1 />} />
        <Route path="/applications/app1" element={<App1 />} />
        <Route path="/static/static1" element={<StaticPage1 />} />
        <Route path="/dynamic/dynamic1" element={<DynamicPage1 />} />
      </Routes>
    </Router>
  );
}

export default App;
