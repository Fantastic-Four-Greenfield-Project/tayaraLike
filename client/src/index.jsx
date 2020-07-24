import React from "react";
import ReactDOM from "react-dom";
import SignUp from './components/SignUp.jsx'
import SignIn from './components/SignIn.jsx'
import Profile from './components/Profile.jsx'
import Landing from './components/Landing.jsx'
import NavBar from './components/NavBar.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Route exact path="/" component={Landing} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
        </Router>
      </div>
    )
  }
}
ReactDOM.render(<Home />, document.getElementById("app"));
