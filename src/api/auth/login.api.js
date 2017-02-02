import {USE_MOCK} from '../../config/security';
import {MOCK_DELAY} from '../../config/config';
import {LOGIN_URL} from '../urls';
import {buildError} from '../helpers';

function mockLogin(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if ('admin' === username && 'admin' === password) {
                resolve({
                    'token': 'eyJhbGciOiJSUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNDg0MjM1NTkzLCJpYXQiOjE0ODQyMzE5OTN9.nsfE49Qv3RLaPxLxc13af47avuYCsHnmZdneddC1lahWFVYkIgEqU4dFxt7ujunUe0ZWjOrJcZ9Pm4hP0iCbPmkPfmcuZwEQyQGcNUN24xQmJE_7d-DC-d1HQjbxjnkmYCTNmEj_LLzGCNCnz5eEPXYTc9QfEwIohydaXk0EjyImOBKn16hnVH3YtKHa5P66XYbYhKu4iNC8eDQDG39BKr7A4410ZSrbuwAVtng1sd_ERumuVO8GJhv1pO5pt0sTbjqztTywfqzG7iDFvG4aNZe3ZasQ4QVETy6-VsQsbpeGefzWUeW8TJASCb6Ae6FLU4kPMy5Tsl81LHes1UtUBdJfhQ_n0h5kFja3Sy8vPP9LUYYPUetqWUpuo7Kto8JiTX72qIw-PhAvt8m1gAKnMDXRvcCNI-X7z9Xq7rOdtoAvts6Ak14a7zmgjGA1MXivYziZ-zYzLWwWMjnWYp1zXrEjG58c5tP2qr-J3WB3lDEXgpZFY9QPanvczKRdx-OHRjlCUxVerkCwlt-5Vq7kM9yc4MyMmUr0KwDSWCl3-kMfUostymSRV9iBwQs3N6Iq0XUKA2dZtfK_BWzv-RqQI7wJyg-4L0Qk70fM0G8XYHyQUsHOA3stY4FsD5tKEWXoYdJYx8Gq3enTZwZqOtOP2cyTTzHS7KjOYnY49YdcLMQ'
                })
            } else {
                reject({
                    'status': 409,
                    'message': 'Incorrect credentials'
                })
            }
        }, MOCK_DELAY);
    });
}

function apiLogin(username, password) {
    let config = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `username=${username}&password=${password}`
    };

    return fetch(LOGIN_URL, config)
        .then(response =>
            response.json().then(user => ({user, response}))
        ).then(({user, response}) => {
            if (!response.ok) {
                return Promise.reject(buildError(response, user))
            } else {
                return Promise.resolve(user);
            }
        })
}
/**
 *
 * @param username
 * @param password
 * @returns {*}
 */
export function login({username, password}) {
    if (USE_MOCK) {
        return mockLogin(username, password);
    }

    return apiLogin(username, password);
}