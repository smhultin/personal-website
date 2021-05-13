import './css/App.css';
import Home from './pages/home';
import TopBar from './components/topbar';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Home/>
    </div>
  );
};

export default App;
