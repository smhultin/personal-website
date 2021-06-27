import './theme/App.css';
import { About, Gallery, Home } from './pages';
import NavBar from './components/navbar';

import { HashRouter, Route } from 'react-router-dom';
import { Flex } from 'rebass';


const App = () => {
  return (
    <HashRouter>
      <div className='App'>
        <NavBar/>
        <Flex>
          <Route exact path='/' component={ Home } />
          <Route exact path='/about' component={ About } />
          <Route exact path='/gallery' component={ Gallery } />
        </Flex>
      </div>
    </HashRouter>
  );
};

export default App;
