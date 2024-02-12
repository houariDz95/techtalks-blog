import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    slug: {
        type: 'string',
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        ref: 'Category',
        required: true,
    },
    img: {
        type: String,
    },

    views: {
        type: Number,
        default: 0,
    },

}, {timestamps: true});

// Add a method to increment views
postSchema.methods.incrementViews = async function () {
    try {
        this.views += 1;
        await this.save();
        return this.views;
    } catch (error) {
        throw new Error('Error incrementing views: ' + error.message);
    }
};

const Post =  mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;