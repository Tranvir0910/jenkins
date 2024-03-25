const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const slug = require('mongoose-slug-generator');


const mongooseDelete = require('mongoose-delete')

const Course = new Schema(
    {
        name: { type: String},
        description: { type: String },
        img: { type: String },
        videoId: { type: String},
        level: { type: String },
        slug: { type: String, slug: 'name'},
    },
    {
        timestamps: true,
    },
);

//Add plugins
Course.plugin(mongooseDelete, { 
    overrideMethods: 'all',
    deletedAt : true
});
mongoose.plugin(slug);

module.exports = mongoose.model('Course', Course);