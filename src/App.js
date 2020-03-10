import React, { Component } from 'react';
import { connect } from 'react-redux';
import './assets/css/App.css';
import Header from './components/Header';
import PageContainer from './components/PageContainer';
import Footer from './components/Footer';





/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @memberof App
   * @summary handles button click 
   */
  

  render() {
    return (
      <div className="App">
        <Header/>
        <PageContainer/>
        <Footer/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
