import React,{Component, Fragment} from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import User from './components/users/User';
import './App.css';
import axios from 'axios';
import Search from './components/users/Search';
import Alertstate from './components/layout/Alertstate';
import PropTypes from 'prop-types' ;
import About from './components/pages/About';

class App extends Component {
  state={
    users:[],
    loading: false,
    alertstate: false
  }

  static propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    alertstate : PropTypes.bool.isRequired
  }

  searchUsers = async text=>{
      this.setState({loading:true});
      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({ users:res.data.items,loading:false});
  }

  clearUsers = () => this.setState({ users: [] ,loading: false  });

  setalert = trueornot =>{
      this.setState({ alertstate: trueornot});
  }
  render(){
  return (
    <Router>
    <div className="App">
    <Navbar title='Github Finder' icon='fab fa-github'/>
    <div className="container">

    {/* <Alertstate alertstate={this.state.alertstate}/> */}
    <Switch>
      <Route exact path='/' render={
        props =>( 
          <Fragment>
              <Alertstate alertstate={this.state.alertstate}/>
              <Search searchUsers={this.searchUsers} 
                clearUsers={this.clearUsers} 
                 userstate={ this.state.users.length > 0 ? true: false}
                   setalerts = {this.setalert}
                />
                <User users={this.state.users} loading={this.state.loading}/>
          </Fragment>
         )
      }/>
      <Route exact path='/about' component={About}/>
    </Switch>
    </div>

    </div>
    </Router>
  );
}
}

export default App;
