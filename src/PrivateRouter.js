import {connect} from "react-redux";
import { Redirect, BrowserRouter as Route } from "react-router-dom"
import React from 'react';


class PrivateRoute extends React.Component {
    render() {
        const {children, logged, path} = this.props;
        return logged ? (<Route path={path}> {children} </Route>) : ( <Redirect to="/login" /> )
    }
}

const mapStateToProps = state => ({
    ...state.authReducer
});

export default connect(mapStateToProps)(PrivateRoute);
