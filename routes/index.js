const express = require('express');
const router =  express();

const queries = require('../db/queries');

router.get('/teams', (request, response) => {
    console.log('GET')
    queries.getAll()
        .then(results => response.send(results))
});

router.post('/teams', (request, response) => {
    queries.post(request.body)
        .then(results => response.send(results))
})

router.delete('/teams', (request, response) => {
    queries.delete(request.body)
        .then(results => response.send(results))
})

router.post('/fixtures', (request, response) => {
    queries.postFixtures(request.body)
        .then(results => response.send(results))
})

module.exports = router;