// @flow
import 'isomorphic-fetch';
const API_HOST = 'http://quantas-api.azurewebsites.net/api/';

function callApi({endpoint: string, _headers, body, method = 'get'}) {
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
        .then(response => {
            //success
            return Promise.resolve(response)
        })
        .catch(err => {
            //error
            return Promise.reject(err)
        })
}
export default callApi;