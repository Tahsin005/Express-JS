const express = require('express');
const cookieParser = require('cookie-parser');
const handler = require('./handler')

const app = express();
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'ejs');

app.set('title', 'amar naam tahsin');

const adminRoute = express();

adminRoute.get('/', (req, res) => {
    // console.log(req.baseUrl);
    // console.log(req.url);
    // console.log(req.originalUrl);
    // console.log(req.path);
    // console.log(req.hostname);
    // console.log(req.ip);
    // console.log(req.method);
    // console.log(req.protocol);
    // console.log(req.params);
    // console.log(req.query);
    res.send('This is admin dashboard.');
});

app.use('/admin', adminRoute);

app.get('/user/:id', handler);

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('This is home page POST.');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000...');
});