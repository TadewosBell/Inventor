const LIFESAVER_ENDPOINTS = {
    DEV_ENV: 'https://inventorer.herokuapp.com/',
    PROD_ENV: '',
};
  
const CURRENT_ENDPOINT = LIFESAVER_ENDPOINTS.DEV_ENV;


export async function request(method, path, jsonData) {
    const url = CURRENT_ENDPOINT + path;
    const requestInfo = {
        method: method,
        cache: 'no-cache',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        referrer: 'no-referrer',
    }

    if (jsonData != null) {
        requestInfo.body = JSON.stringify(jsonData);
    }
    let response = await fetch(url, requestInfo);
    return response.json();
}