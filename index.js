const express = require('express');
// const handle = require('./handle');

const app = express();
// const admin = express();

// app.locals.title = "My App";

// admin.get('/', (req, res) => {
//     console.log(admin.mountpath);
//     res.send('Welcome admin shaheb');
// });

// admin.on('mount', (parent) => {
//     console.log('Admin Mounted');
//     console.log(parent);
// })

// app.get('/', handle);

// app.enable('case sensitive routing');

// app.param('id', (req, res, next, id) => {
//     const user = {
//         userid: id,
//         name: 'Shaheb',
//     }
//     req.user = user;
//     next();
// });

app.set('view engine', 'ejs');

app.route('/about/tahsin')
   .get((req, res) => {
        res.render('pages/about')
    })
    .post((req, res) => {
        res.send('About Tahsin Page POST');
    })
    .put((req, res) => {
        res.send('About Tahsin Page PUT');
    });

// app.all('/about/:id', (req, res) => {
//     console.log(app.mountpath);
//     console.log(req.user);
//     // console.log(app.enabled('case sensitive routing'));
//     res.send('This is home page.');
// });

// app.use('/admin', admin);

app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});