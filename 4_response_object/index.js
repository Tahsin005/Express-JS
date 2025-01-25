const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
    res.send('This is redirected test path')
});

app.get('/about', (req, res) => {
    // console.log(res.headersSent);
    // res.render('pages/about', {
    //     name: 'Bangladesh',
    //     url: 'about'
    // });
    // console.log(res.headersSent);

    // res.send('About page');
    // res.status(200);
    // res.sendStatus(200);
    // res.end();

    // res.json(
    //     {
    //         name: 'Bangladesh',
    //         url: 'about'
    //     }
    // );

    // res.format({
    //     'text/plain': function () {
    //         res.send('About page');
    //     },

    //     'text/html': function () {
    //         res.render('pages/about', {
    //             name: 'Bangladesh',
    //             url: 'about'
    //         });
    //     },

    //     'application/json': function () {
    //         res.json({
    //             name: 'Bangladesh',
    //             url: 'about'
    //         });
    //     },

    //     default: function () {
    //         res.status(406).send('Not Acceptable');
    //     }
    // });


    // res.cookie('name', 'MD. Tahsin Ferdous', {
    //     maxAge: 1000 * 60 * 60 * 24,
    //     httpOnly: true
    // });

    // res.status(200).send('Cookie set successfully');

    // res.redirect('/test');

    res.set('cube', 'yuxin little magic');
    console.log(res.get('cube'));
    res.end();
});

app.listen(4000, () => {
    console.log('Server is running on port 4000...');
});