import { createContext, useReducer } from "react";
import AlertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertProvider = ({children}) => {
    const initialState = null;

    //@ set an alert
    const setAlert = (msg, type) => {
        dispatch({
            type: 'SET_ALERT',
            payload: {msg, type}
        });

        setTimeout(()=> dispatch({type: 'REMOVE_ALERT'}), 3000)
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    return(
        <AlertContext.Provider value={{alert:state, setAlert}}>
            {children}
        </AlertContext.Provider>
    )
}
export default AlertContext; 

