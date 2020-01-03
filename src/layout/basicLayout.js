import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux"
import './basicLayout.css';
import {authorize, logout} from "../actions/authAction";

class BasicLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user, logged} = this.props;
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/register">Registration Page</Link>
                    </li>
                    <li>
                        <Link to="/login">Login Page</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        {logged ? user : "Not logged"}
                    </li>
                    {logged &&
                    <li>
                        <a className="logout" onClick={() => this.props.logout()}>Log Out</a>
                    </li>
                    }
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    ...state.authReducer
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicLayout);


