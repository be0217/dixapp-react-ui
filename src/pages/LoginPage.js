import React from "react";
import {connect} from "react-redux";
import {authorize} from "../actions/authAction";
import {Redirect} from "react-router-dom"

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  login(email, password) {
    this.props.authorize(email, password);
  }

  render() {
    const {email, password} = this.state;
    const {logged} = this.props;
    return logged ? (<Redirect to={{
      pathname: "/"
    }}/>) : (
      <div className="form">
        <h3>
          Login
        </h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.login(email, password);
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

const mapDispatchToProps = dispatch => ({
  authorize: (email, password) => dispatch(authorize(email, password))
});

const mapStateToProps = state => ({
  ...state.authReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
