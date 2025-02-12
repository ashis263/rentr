import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import app from '../../firebase.init';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import axios from 'axios';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ myCars, setMyCars ] = useState([]);
    const [ cars, setCars ] = useState([]);
    const [ isCarModified, setIsCarModified ] = useState(false)
    const [recent, setRecent] = useState([]);
    const [popular, setPopular] = useState([]);

    const auth = getAuth(app);
    const authData = {
        user,
        setUser,
        isLoading,
        setIsLoading,
        auth,
        myCars,
        setMyCars,
        isCarModified,
        setIsCarModified,
        recent,
        cars,
        popular
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                setIsLoading(false);
            }else{
                setUser(null);
                axios.post('https://rentr-server.vercel.app/logOut', {},  { withCredentials: true})
                setIsLoading(false);
            }
            return () => unsubscribe();
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    
    useEffect((() => {
        axios.get(('https://rentr-server.vercel.app/cars'))
        .then(res=>{
            setCars(res.data);
        })
        axios.get('https://rentr-server.vercel.app/cars/recent')
            .then(res => setRecent(res.data))
        axios.get('https://rentr-server.vercel.app/cars/popular')
            .then(res => setPopular(res.data))
    }), [isCarModified])
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