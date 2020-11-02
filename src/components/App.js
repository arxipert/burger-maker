import React, {Component} from 'react';
import BurgerMaker from '../containers/BurgerMaker/BurgerMaker';
import Layout from './Layout/Layout';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Layout >
          <BurgerMaker />
        </Layout>
      </div>
    )
}
}

export default App;
