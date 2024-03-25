const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override')

// handlebars
const hdbs = require('express-handlebars');
// import { engine } from 'express-handlebars';

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect(
    
);

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// static file & scss
app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'))

// HTTP logger
// app.use(morgan('combined'));

// Temple engine
app.engine(
    'hbs',
    hdbs.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),

);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes Init
route(app);

// local host: 127.0.0.1
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

// layout : dùng để viết các thành phần chung

// route
// arrow function
// request: chứa thông tin mà ứng dụng client yêu cầu lên server
// response: xử lý request, có thể tùy chọn cấu hình cho việc client trả về cái gì, như thế nào
