const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose')

class CourseController {
    // [GET] /courses/:slug
    async show(req, res, next) {
        await Course.findOne({ slug : req.params.slug })
            .then( course => {
                res.render('courses/show', { 
                    course: mongooseToObject(course)
                 })
            })
            .catch(next)
    }

    // [GET] /courses/create
    async create(req, res, next) {
        res.render('courses/create')
    }

    // [POST] /courses/store
    store(req, res, next) {
        // Tạo đường dẫn hình ảnh từ videoId
        const formData = req.body;
        formData.img = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
    
        // Tạo một instance mới của Course từ req.body
        const course = new Course(formData);
        // Lưu course vào cơ sở dữ liệu
        course.save()
            .then(() => {
                // Nếu lưu thành công, chuyển hướng người dùng về trang chính
                res.redirect('/');
            })
            .catch((error) => {
                // Xử lý lỗi nếu có
                console.error(error);
                res.status(500).send('Internal Server Error');
            });
    } 
    
    // [GET] /courses/:id/edit
    async edit(req, res, next) {
        await Course.findById(req.params.id)
            .then( course => {
                res.render('courses/edit', { 
                    course: mongooseToObject(course)
                 })
            })
            .catch(next)
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [DELETE] /courses/:id
    async delete(req, res, next){
        await Course.delete({ _id: req.params.id }, req.body)
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /courses/:id/restore
    async restore(req, res, next){
        await Course.restore({ _id: req.params.id }, req.body)
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /courses/:id/force
    async forceDestroy(req, res, next) {
        await Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController();
