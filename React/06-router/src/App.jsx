import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar title="react Router" />
      <Outlet />
    </div>
  );
}

export default App;
