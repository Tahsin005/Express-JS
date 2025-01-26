const express = require('express');

const adminRouter = express.Router();

// adminRouter.get('/', (req, res) => {
//     res.send('Dashboard');
// });

adminRouter.get('/login', (req, res) => {
    res.send('Login');
});

adminRouter
    .route('/')
    .all((req, res, next) => {
        console.log('I am logging something.');
        next();
    })
    .get((req, res) => {
        res.send('GET');
    })
    .post((req, res) => {
        res.send('POST');
    })
    .put((req, res) => {
        res.send('PUT');
    })
    .delete((req, res) => {
        res.send('DELETE');
    });


module.exports = adminRouter;