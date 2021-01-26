import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
// import './App.css';
import { connect,} from 'react-redux'
import BaseRouter from './routes';
// import PrimarySearchAppBar from './component/AppBar';
import Navbar from './component/Navbar';
import Carousel from './component/Carousel';
import * as actions from './store/actions/auth'
import Video from './component/Video';


class App extends Component {

    componentDidMount() {
      this.props.onTryAutoSignup();
    }
  render() {
    return (
      <div>
           <Router>
          
         <Navbar {...this.props}/>
         <BaseRouter/>
        
        
          </Router>

           
      </div>
     );
   }
   
  }

 const mapStateToProps = state => {
    return {
      isAuthenticated: state.token !== null
    }
  }
  

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
