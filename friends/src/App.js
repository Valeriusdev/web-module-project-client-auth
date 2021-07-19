import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// import components
import Login from './components/Login';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import PrivateRoute from './utils/PrivateRoute';


function App() {
  return (
    <Router>  
    <div className="App">
      <ul>
        <li>
          <Link to='/login'> Login </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/friends'> Friends List </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/add'> Add Friend </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/delete'> Delete Friend </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/login' component={Login} />
        <PrivateRoute path='/friends' component={FriendList} />
        <PrivateRoute path='/add' component={AddFriend} />
      </Switch>  
         
    </div>
    </Router>
  );
}

export default App;
