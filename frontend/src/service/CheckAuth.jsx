export const CheckAuthentication = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}auth/check-auth`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.status === 401) {
            return { isAuthenticated: false };
        }

        return await response.json();
    }

    catch (error) {
        throw new Error(`Internal server error: ${error.message}`);
    }
}