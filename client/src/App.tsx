import * as React from 'react';
import Editor from './components/editor';
import './bootstrap/css/bootstrap.css';
// import Error404 from './errorPages/error404';
import Home from './components/home';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store';

export interface AppProps {};
export interface AppState {};

class App extends React.Component<AppProps, AppState> {

//        <Editor load={false}/>
//   {/*<Route path="/projects" component={FileExplorer}/>*/}
//   {/*<Route path="/editor/:id" component={Editor}/>*/}
//   {/*<Route path="/404" component={Error404}/>*/}

  render(){

      return(
          <Provider store={store}>
          <div id="App" className="App">
              <BrowserRouter>
                  <div>
                      <Route exact path="/" component={Home}/>
                      <Route path="/editor/:id" component={Editor}/>
                  </div>
              </BrowserRouter>
          </div>
          </Provider>
      );

  }
}


export default App;