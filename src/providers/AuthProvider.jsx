import PropTypes from 'prop-types';
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const authData = {

}

const AuthProvider = ({ children }) => {
    return (
        <div>
            <AuthContext.Provider data={ authData }>
                {children}
            </AuthContext.Provider>
        </div>
    );
}


AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};


export default AuthProvider;