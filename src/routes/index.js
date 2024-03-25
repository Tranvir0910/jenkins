const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
    app.use('/me', meRouter)
    app.use('/courses', coursesRouter)
    app.use('/news', newsRouter);
    app.use('/', siteRouter);

    // debug -> sources -> tick breakpoint -> reset -> check req, res
    // app.get('/search', (req, res) => {
    //     res.render('search');
    //     // console.log(req.query)
    // })

    // app.post('/search', (req, res) => {
    //     res.send('');
    //     // console.log(req.body)
    // })
}

module.exports = route;
