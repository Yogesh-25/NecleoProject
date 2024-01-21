import './App.css';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import "./Navbar.css";

const App = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe123@gmail.com',
    avatar: 'https://placekitten.com/50/50',
  };

  return (
    <div className="app">
      <Navbar websiteName="Necleo" user={user} />
      <Dashboard />
    </div>
  );
};

export default App;
