const express = require('express');
const fs = require('fs');

const app = express();

// app.get('/', (req, res, next) => {
//     // res.send('Hello World');

//     // asynchronous error
//     // fs.readFile('/file-does-not-exist', (err, data) => {
//     //     if (err) next(err);
//     //     else res.send(data);
//     // });

//     setTimeout(() => {
//         try {
//             console.log(a);
//         } catch (err) {
//             next(err);
//         }
//     }, 100);
// });

app.get('/', [
    (req, res, next) => {
        fs.readFile('/file-does-not-exist', (err, data) => {
            console.log(data);
            next(err);
        });
    },
    (req, res, next) => {
        console.log('This middleware is called');
        console.log(data.property);
    },
]);

// if error occurs, it will not call this middleware
app.use((req, res, next) => {
    console.log('I am not called!');
    next();
})

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