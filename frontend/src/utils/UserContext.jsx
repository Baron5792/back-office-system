import { createContext, useContext, useEffect, useState } from "react"

const userContext = createContext(null);

export const useUser = () => {
    return useContext(userContext);
}

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}auth/check-auth`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const request = await response.json();
            if (!request.isAuthenticated === true) {
                setUser(false);
            }

            else {
                setUser(request.user);
            }
        }

        catch (error) {
            setUser(null);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    const value = {
        user: user,
        refreshUser: fetchUser
    }

    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    )
}