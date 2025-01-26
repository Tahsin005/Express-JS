const express = require('express');

const publicRouter = express.Router();

const log = (req, res, next) => {
    console.log('I am logging something!');
    next();
};

// publicRouter.all('*', log);

// publicRouter.param('user', (req, res, next, actualParameter) => {
//     req.user = actualParameter === '1' ? 'Admin' : 'Anonymous';
//     console.log('I am called once.');
//     next();
// });

publicRouter.param((param, option) => (req, res, next, val) => {
    if (val === option) {
        next();
    } else {
        res.sendStatus(403);
    }
});

publicRouter.param('user', '12');

// This is a middleware
publicRouter.get('/:user', (req, res, next) => {
    console.log('This also matches.');
    next();
});

publicRouter.get('/:user', (req, res) => {
    // res.send(`Hello ${req.user}`);
    res.send('Hello Admin');
});

publicRouter.get('/about', (req, res) => {
    res.send('About');
});

module.exports = publicRouter;