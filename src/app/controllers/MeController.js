const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class MeController {
    // [GET] /me/stored/courses
    async storedCourses(req, res, next){
        await Course.find({})
            .then( courses => {
                res.render('me/stored-courses', {
                    courses : mutipleMongooseToObject(courses)
                })
            })
            .catch(next)
        
    }
    // [GET] /me/trash/courses
    async trashCourses(req, res, next){
        await Course.findDeleted({})
            .then( courses => {
                res.render('me/trash-courses', {
                    courses : mutipleMongooseToObject(courses)
                })
            })
            .catch(next)
        
    }
}

module.exports = new MeController();
