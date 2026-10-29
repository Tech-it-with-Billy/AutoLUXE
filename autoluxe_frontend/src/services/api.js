const API_BASE_URL = (
    import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api'
).replace(/\/+$/, "");

async function apiRequest(endpoint, options ={}){
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content_Type': 'application/json', 
            ...options.headers,
        },
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
        const error = new Error('Request Failed!');
        error.status = response.status;
        error.data = data;
        throw error;
    }

    return data
}

export function registerUser(userData) {
    return apiRequest('/api/users/register/', {
        method: 'POST',
        body: JSON.stringify(userData)
    })
}

export function loginUser(credentials) {
    return apiRequest('/api/users/login/', {
        method: 'POST',
        body: JSON.stringify(credentials)
    })
}