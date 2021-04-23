import React, { useReducer, useRef } from 'react';
import { initialState, patientReducer } from '../Reducers/PatientReducer';

const Patient = () => {
    const nameRef = useRef()
    const [state, dispatch] = useReducer(patientReducer, initialState)


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nameRef.current.value);
        dispatch({
            type: "ADD_PATIENT",
            name: nameRef.current.value,
            id: state.patient.length + 1, //array length so we add 1 
        })
        console.log(state.patient.length);
        nameRef.current.value = ''
    }

    return (
        <div>
            <h3>Total Patient : {state.patient.length}  </h3>

            <form action="" onSubmit={(e) => handleSubmit(e)} >
                <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Enter Your Name"
                    ref={nameRef}
                />
                <button>Submit </button>
            </form>

            <div>
                {
                    state.patient.map(pt => <div key={pt.id} >
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ marginRight: '15px' }} > {pt.name} </h3>
                            <button onClick={() => dispatch({ type: 'REMOVE_PATIENT', id: pt.id })} >Remove</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Patient;