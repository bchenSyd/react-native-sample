// @flow
const API_HOST = 'http://quantas-api.azurewebsites.net/api';

function callAPI({ endpoint, _headers, body, method = 'get' }: {
    endpoint: string,
    _headers: any,
    body: any,
    method: string
}): Promise {
    const fullUrl = (endpoint.indexOf(API_HOST) === -1) ? API_HOST + endpoint : endpoint;
    let headers = _headers || {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    return fetch(fullUrl, {
        method,
        headers,
        body
    })
        .then(res => {
            if (res.status >= 400) {
                throw new Error("Bad response from server");
            }
            return res.json()
        })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(err => {
            //error
            return Promise.reject(err)
        })
}
export default callAPI;