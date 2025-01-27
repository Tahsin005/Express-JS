const express = require('express');
const multer = require('multer');
const path = require('path');

// file upload folder
const UPLOADS_FOLDER = './uploads/';

// define the storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname
            .replace(fileExt, '')
            .toLowerCase()
            .split(' ')
            .join('-') + '-' + Date.now();

        cb(null, fileName + fileExt);
    },
});

// prepare the final multer upload object
var upload = multer({
    // dest: UPLOADS_FOLDER,
    storage: storage,
    limits: {
        fileSize: 1000000, // 1MB
    },
    fileFilter: (req, file, cb) => {
        if (file.fieldname === 'avatar') {
            if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
                cb(null, true);
            } else {
                cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
            }
        } else if (file.fieldname === 'gallery') {
            if (file.mimetype === 'application/pdf') {
                cb(null, true);
            } else {
                cb(new Error('Only .pdf format allowed!'));
            }
        } else {
            cb(new Error('There was an unknown error!'));
        }
    },
});

const app = express();

// application route
// single file upload
// app.post('/', upload.single("avatar"), (req, res) => {
//     res.send('Hello World');
// });

// multiple file upload
// app.post('/', upload.array("avatar", 3), (req, res) => {
//     res.send('Hello World');
// });

// multiple file upload with different field name
app.post('/', upload.fields([
    { name: 'avatar', maxCount: 2 },
    { name: 'gallery', maxCount: 3 }
]), (req, res) => {
    console.log(req.files);
    res.send('Hello World');
});

// single file upload without form-data field
// app.post('/', upload.none(), (req, res) => {
//     console.log(req.body); // form fields
//     res.send('Hello World');
// });


// app.post('/', upload.single("avatar"), (req, res) => {
//     res.send('Hello World');
// });

// default error handler
app.use((err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.status(500).send("There was an upload error!");
        } else {
            res.status(500).send(err.message);
        }
    } else {
        res.send('Success');
    }
});

app.listen(4000, () => {
    console.log('Server is running on port 4000...');
});