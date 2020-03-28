import React, {useState} from 'react';

import './AddPerson.css';

const addPerson = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(null);

    const onChangeHandler = (e, setState) => {
        setState(e.target.value);
    };

    return (
        <div className="AddPerson">
            <input onChange={(e) => onChangeHandler(e, setName)} type="text" placeholder={'Your Name'}/>
            <input onChange={(e) => onChangeHandler(e, setAge)} type="number" placeholder={'Your Age'}/>
            <button onClick={() => props.personAdded(name, age)}>Add Person</button>
        </div>
    );
}

export default addPerson;