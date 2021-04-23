export const initialState = {
    patient: [],
}

export const patientReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_PATIENT':
            {
                // console.log(action);
                const newPatient = {
                    name: action.name,
                    id: action.id
                }
                const newPatientState = [...state.patient, newPatient]
                return { patient: newPatientState };
            }
        case 'REMOVE_PATIENT':
            {
                console.log(action);

                const removePatient = state.patient.filter(pt => pt.id !== action.id)

                //or 

                // const removePatient = state.patient.splice(action.id == state.id, 1)
                //the second method is not working perfectly. 

                const newState = { patient: removePatient }

                return newState
            }

        default:
            return state
    }
};
