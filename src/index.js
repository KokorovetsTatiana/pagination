import './css/common.css';

const options = {
    headers: {
        Authorization: 'e716f8e9f4f24672a7f4cad11d604d9d',
    },
};

fetch('https://newsapi.org/v2/everything?q=cat', options)
    .then(r => r.json())
    .then(console.log);