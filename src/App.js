import './App.css';
import { PicSearch } from './components/PicSearch/PicSearch'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="ui pointing menu">
      <div className="ui container">
        <Link to="/clock-app" className="item">Clock App</Link>
        <Link to="/profile-app" className="item">Profile App</Link>
        <Link to="/picsearch-app" className="item">Pic Search App</Link>
        <Link to="/increment-app"className="item">Increment</Link>

      </div>
    </div>
    // <PicSearch />
  );
}

export default App;
