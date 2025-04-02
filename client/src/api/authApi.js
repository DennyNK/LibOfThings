import { useContext, useEffect } from "react";
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

    useEffect(() => {
        if (!accessToken) {
            return
        }

        const options = {
            headers: {
                'X-Authorization': accessToken
            }
        };

        request.get(`${baseUrl}/logout`, null, options)
            .then(userLogoutHandler)
    }, [accessToken, userLogoutHandler])

    return {
        isLoggedOut: !!accessToken
    }
}