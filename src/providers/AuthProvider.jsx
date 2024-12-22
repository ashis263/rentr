import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import app from '../../firebase.init';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);
    const auth = getAuth(app);
    const authData = {
        user,
        setUser,
        isLoading,
        setIsLoading,
        auth
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            return () => unsubscribe();
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <AuthContext.Provider value={ authData }>
                {children}
            </AuthContext.Provider>
        </div>
    );
}


AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};


export default AuthProvider;