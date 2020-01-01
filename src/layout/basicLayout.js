import React from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux"
import './basicLayout.css';

class BasicLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user, logged } = this.props;
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
                        { logged ? user : "Not logged"}
                    </li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
   ...state.authReducer
});

export default connect(mapStateToProps)(BasicLayout);


