import React, {
    useEffect,
    useRef,
    useContext,
    memo
} from 'react';
import logo from "../../assets/images/logo.svg";
import styles from "./Cockpit.css";
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {

    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('cockpit js use effect');
        buttonElRef.current.click();
        return () => {
            console.log('Clean up work in useEffect!');
        }
    }, []);

    useEffect(() => {
        console.log('2nd useEffect/Cockpit');
        return () => console.log('cleanup work in 2nd useEffect/Cockpit');
    });

    const buttonElRef = useRef();

    const classes = [];
    let btnClass = '';
    props.showPersons ? btnClass = styles.Red : btnClass = '';
    if(props.personsLength <= 2){
        classes.push(styles.red);
    }
    if(props.personsLength <= 1){
        classes.push(styles.bold)
    }

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is working! Look at the fancy spinner!</p>
            <img src={logo} className={styles.CockpitLogo} alt="logo"/>
            <button
                className={btnClass}
                ref={buttonElRef}
                onClick={props.clicked}>Toggle Names</button>
                {<button onClick={() => authContext.login()}>{authContext.authenticated ? 'Log In' : 'Log Out'}</button>}
        </div>
    );
};

export default memo(cockpit);