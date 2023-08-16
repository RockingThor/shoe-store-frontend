import { API_URL, STRAPI_API_TOKEN } from './Urls';

export const fetchDAtaFromAPI = async (endpoint) => {
    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + STRAPI_API_TOKEN
        }
    };
    const response = await fetch(`${API_URL}${endpoint}`, options);
    const data = await response.json();

    return data;
}