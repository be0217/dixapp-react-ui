import React from "react";
import './RegistrationPage.css';
import {environment} from "../index";
import {
  withRouter
} from "react-router-dom";


class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  register(email, password) {
    const {axios} = environment;
    axios.post('/users/register', {
      email: email,
      password: password
    }).then(response => {
      this.props.history.push("/login");
    }).catch(error => {
      console.error(error);
    })

  }

  render() {
    const {email, password} = this.state;
    return (
      <div className="form">
        <form onSubmit={(e) => {
          e.preventDefault();
          this.register(email, password);
        }}>
          <label htmlFor="email">
            Email
          </label>
          <input onChange={(event) => this.setState({email: event.target.value})} name="email" type="text"
                 placeholder="Email"/>
          <label htmlFor="password">
            Password
          </label>
          <input onChange={(event) => this.setState({password: event.target.value})} name="password" type="password"
                 placeholder="Password"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default withRouter(RegistrationPage)
