const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    // [GET] /
    // async home(req, res, next) {
    //     try {
    //         const courses = await Course.find({});
    //         res.json(courses);
    //     } catch (err) {
    //         next(err); 
    //         res.status(500).json({ message: err.message });
    //     }
    // }
    // or
    async home(req, res, next){
        await Course.find({})
            .then(courses => {
                res.render('home', {  
                    courses: mutipleMongooseToObject(courses),
                })
            })
            .catch(next)
    }
    //         .catch(next)
    // home(req, res){
    //     res.render('home')
    // }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
