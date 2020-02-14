import React, {Component} from 'react'
import h1 from "eslint-plugin-jsx-a11y/src/util/implicitRoles/h1";

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: ''
    };

    componentDidCatch = (error, errorInfo) => {
        this.setState({
            hasError: true,
            errorMessage: error
        })
    };

    render() {
        if(this.state.hasError) {
            return (
                <h1>Something went wrong</h1>
            )
        } else {
            console.log(this.props.children);
            return this.props.children;
        }
    }
}

export default ErrorBoundary;