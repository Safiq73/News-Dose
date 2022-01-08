import React, { Component } from 'react';
import Navbar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
class App extends Component {
  api=process.env.REACT_APP_NEWS_API_KEY
  state={
    progress:0,
  }
  setProgress=(prgrs)=>{
    this.setState({progress:prgrs})
  }

  render() { 
    return (
      <div>
        {console.log(this.api)}
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={this.setProgress}
        height={2}
      />
        <Navbar />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} api={this.api}  key='headline' pageSize={6} showAlertgeSize={6} country='in' category='' showAlert={News} />}>
            </Route>
            <Route exact path='/general' element={<News setProgress={this.setProgress} api={this.api}  key='general' pageSize={6} country='in' category='general' pageTitle="General News" showAlert={News}  />}>
            </Route>  
            <Route exact path='/business' element={<News setProgress={this.setProgress} api={this.api}  key='business' pageSize={6} country='in' category='business' pageTitle="Business News" showAlert={News} />}>
            </Route>
            <Route exact path='/health' element={<News setProgress={this.setProgress} api={this.api}  key='health' pageSize={6} country='in' category='health' pageTitle="Health News" showAlert={News} />}>
            </Route>
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} api={this.api}  key='entertainment' pageSize={6} country='in' category='entertainment' pageTitle="Entertainment News" showAlert={News} />}>
            </Route>
            <Route exact path='/sports' element={<News setProgress={this.setProgress} api={this.api}  key='sports' pageSize={6} country='in' category='sports' pageTitle="Sports News" showAlert={News} />}>
            </Route>
            <Route exact path='/technology' element={<News setProgress={this.setProgress} api={this.api}  key='technology' pageSize={6} country='in' category='technology' pageTitle="Technology News" showAlert={News} />}>
            </Route>
            <Route exact path='/science' element={<News setProgress={this.setProgress} api={this.api}  key='science' pageSize={6} country='in' category='science' pageTitle="Science News" showAlert={News} />}>
            </Route>


          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

