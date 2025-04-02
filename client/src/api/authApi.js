import { useContext, useEffect, useState } from "react";
import request from "../utils/request.js";
import { UserContext } from "../contexts/UserContext.js";


const baseUrl = 'http://localhost:3030/users';

export const useRegister = () => {
    try {
        const register = async (email, password, firstName, city, country) => {
            const result = await request.post(`${baseUrl}/register`, { email, password, firstName, city, country });
            return result;
        }

        return {
            register
        }
    }
    catch (err) {
        console.error("Registration failed:", err);
        throw err;
    }

}

export const useLogin = () => {

    try {
        const login = async (email, password) => {
            const result = await request.post(`${baseUrl}/login`, { email, password });

            return result;
        }
        return {
            login
        }
    }
    catch (err) {
        console.error("Login failed:", err);
        throw err;
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
                console.error("Logout failed:", err);
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