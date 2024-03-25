class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('NEW DETAIL');
    }
}

// export giá trị gì thì require nhận giá trí đó

module.exports = new NewsController();
