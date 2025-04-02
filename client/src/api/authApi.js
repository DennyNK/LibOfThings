import { useContext, useEffect, useState } from "react";
import request from "../utils/request.js";
import { UserContext } from "../contexts/UserContext.js";


const baseUrl = 'http://localhost:3030/users';

export const useRegister = () => {

        const [error, setError] = useState(null); 
    
        const register = async (email, password, firstName, city, country) => {
            try { const result = await request.post(`${baseUrl}/register`, { email, password, firstName, city, country });
            return result;
        }
            catch (err) {
                console.error(err);
                setError('Registration failed. Please try again.')
            }
        
        }
    
    return {
        register,
        error
    }

}

export const useLogin = () => {

    const [error, setError] = useState(null);

    
        const login = async (email, password) => {
            try { const result = await request.post(`${baseUrl}/login`, { email, password });

            return result;}
            catch (err) {
                console.log(err);
                setError('Login failed. Please try again.')
            }
        }
        
    return {
        login,
        error
    }
};

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!accessToken) {
            return
        }

        const logout = async () => {
            try {
                const options = {
                    headers: { 'X-Authorization': accessToken }
                };

                await request.get(`${baseUrl}/logout`, null, options);
                userLogoutHandler();
            } catch (err) {
                console.log(err);
                setError("Failed to log out. Please try again.");
            }
        };

        logout();
    }, [accessToken, userLogoutHandler])

    return {
        isLoggedOut: !!accessToken,
        error
    }
}