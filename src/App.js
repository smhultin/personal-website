import './theme/App.css';
import { About, Home } from './pages';
import NavBar from './components/navbar';

import { Flex } from 'rebass';


const App = () => {
  return (
    <div className='App'>
      <NavBar/>
      <Flex>
        <About/>
      </Flex>
    </div>
  );
};

export default App;
