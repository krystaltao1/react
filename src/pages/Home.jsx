import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to My React Projects</h1>
      <div>
        <h2>
          <Link to="/games/game1">Games</Link>
        </h2>
        <p>Collection of small JSX games</p>
      </div>
      <div>
        <h2>
          <Link to="/applications/app1">Applications</Link>
        </h2>
        <p>Interactive TSX applications</p>
      </div>
      <div>
        <h2>
          <Link to="/static/static1">Static Pages</Link>
        </h2>
        <p>JSX static web pages</p>
      </div>
      <div>
        <h2>
          <Link to="/dynamic/dynamic1">Dynamic Pages</Link>
        </h2>
        <p>JSX dynamic web pages</p>
      </div>
    </div>
  );
}

export default Home;
