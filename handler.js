const handler = (req, res) => {
    // console.log(req.secure);
    // console.log(req.app.get('title'));
    // console.log(req.route);
    console.log(req.accepts('application/json'));

    if (req.accepts('html')) {
        res.render('pages/about');
    } else {
        res.send('This is secure page.');
    }

    console.log(req.get('accept'));
};

module.exports = handler;