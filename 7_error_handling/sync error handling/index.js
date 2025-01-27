const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // res.send('Hello World');
    // res.send(a);

    for (let i = 0; i <= 10; i++) {
        if (i === 5) {
            next('There was an error!');
        } else {
            res.write('a');
        }
    }
    res.end();
});

// 404 error handler
app.use((req, res, next) => {
    // res.status(404).send('Requested URL was not found.');
    next('Requested URL was not found');
});

// custom error handling middleware
app.use((err, req, res, next) => {
    if (res.headersSent) {
        next('Header was already sent.');
    } else {
        if (err.message) {
            res.status(500).send(err.message);
        } else {
            res.status(500).send('There was an error');
        }
    }
});

app.listen(4000, () => {
    console.log('Server is running on port 4000...');
});