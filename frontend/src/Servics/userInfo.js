const userinfo_url = require('./config').userinfo_url;

const create = userinfo => {
    return fetch(`${userinfo_url}/create`, {
        method: 'post',
        body: JSON.stringify(userinfo),
        headers: {
            "Content-Type": 'application/json'
        }
    }).then(res => res.json())
        .then(data => data)
};


export default {
    create: create,
}