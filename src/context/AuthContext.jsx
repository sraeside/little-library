import { createContext, useEffect, useReducer } from 'react';

export const AuthContext = createContext();

const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN': {
            return {
                ...state,
                currentUser: action.payload,
            };
        }
        case 'LOGOUT': {
            return {
                ...state,
                currentUser: null,
            };
        }
        default:
            return state;
    }
};

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, {currentUser: null});

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('currentUser'));
        if (storedUser) {
            dispatch({ type: 'LOGIN', payload: storedUser });
        }
    }, [])

    return (
        <AuthContext.Provider value={{currentUser: state.currentUser, dispatch}} >
            {children}
        </AuthContext.Provider>
    );
};

