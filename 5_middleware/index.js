const express = require('express');

const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

const adminRouter = express.Router();


const loggerWrapper = (options) => {
    return function (req, res, next) {
        if (options.log ) {
            console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip}`);
            next();
        } else {
            throw new Error('Failed to log')
        }
    };
}

adminRouter.use(loggerWrapper({ log: false }));

adminRouter.get('/dashboard', (req, res) => {
    res.send('Dashboard');
});

app.use('/admin', adminRouter);

// app.use(logger);
app.get('/about', (req, res) => {
    res.send('About');
});

const errorMiddleware = (err, req, res, next) => {
    console.log(err.message);
    res.status(500).send('Something went wrong');
};

adminRouter.use(errorMiddleware);

app.listen(4000, () => {
    console.log('Server is running on port 4000...');
});