import React from 'react';
import User from '../../components/User';

const authPage = (props) => (
    <div>
        <h1>The {props.appName} Page</h1>
        <User name={'Sean'} age={33}/>
    </div>
);

authPage.getInitialProps = (context) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({appName: 'Super Auth'})
        }, 1000)
    });
};

export default authPage;