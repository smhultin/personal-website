import './theme/App.css';
import { About, Friends, Projects, Home } from './pages';
import { Footer, NavBar } from './components';

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
          <Route exact path='/projects' component={ Projects } />
          <Route exact path='/friends' component={ Friends } />
        </Flex>
        <Footer/>
      </div>
    </HashRouter>
  );
};

export default App;
