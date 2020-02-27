import React, {useEffect} from 'react';
import logo from "../../assets/images/logo.svg";
import styles from "./Cockpit.css";

const cockpit = (props) => {
    useEffect(() => {
        console.log('cockpit js use effect');
        return () => {
            console.log('Clean up work in useEffect!');
        }
    }, []);

    useEffect(() => {
        console.log('2nd useEffect/Cockpit');
        return () => console.log('cleanup work in 2nd useEffect/Cockpit');
    });

    const classes = [];
    let btnClass = '';
    props.showPersons ? btnClass = styles.Red : btnClass = '';
    if(props.persons.length <= 2){
        classes.push(styles.red);
    }
    if(props.persons.length <= 1){
        classes.push(styles.bold)
    }

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is working! Look at the fancy spinner!</p>
            <img src={logo} className={styles.CockpitLogo} alt="logo"/>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Names</button>
        </div>
    );
};

export default cockpit;