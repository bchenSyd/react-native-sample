// @flow
const API_HOST = 'http://quantas-api.azurewebsites.net/api';

type fetchOptions = {
    headers: any,
    body: any,
    method: string
}
export default function callAPI(endpoint: string, options?: fetchOptions): Promise<any> {
    const fullUrl = (endpoint.indexOf(API_HOST) === -1) ? API_HOST + endpoint : endpoint;
    const defaultOptions = {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
        body: null
    };
    const fetchOptions = options || {};

    return fetch(fullUrl, { ...defaultOptions, ...fetchOptions })
        .then(res => {
            if (res.status >= 400) {
                throw new Error("Bad response from server");
            }
            // note that httpResponse.json returns a Promise as well
            // we will have to chain it
            return res.json()
        })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(err => {
            //error
            return Promise.reject(err)
        })
};
