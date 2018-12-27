import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import Slider1 from '../src/components/slideshow';
import Slider2 from '../src/components/Slider2';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
        <div>
          
             <a href="/" > Slider 1 </a> or 
             <a href="/slider2" > Slider 2 </a>
          
        </div>       
          <header className="App-header">
            {/* <Routes/> */}
            <BrowserRouter> 
                <div>
                    <Switch>
                        <Route path="/" exact component={Slider1}/>
                        <Route path="/slider2" exact component={Slider2} />
                    </Switch>
                      
                </div>
                
            </BrowserRouter>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
