"use server";
import Category from "@/models/category.model";
import { connectToDb } from "../mongoose";
import Post from "@/models/post.model";
import { revalidatePath } from "next/cache";

export const getCategories = async () => {
    try {
    await connectToDb()
     const categories = await Category.find()
     return categories
    } catch (error) {
        console.log(error)
    }
}

export const getCatById = async (id) => {
    try {
        await connectToDb();
        const category = await Category.findById(id);
        return category
    } catch (error) {
        console.log(error)
    }
}




// blog actions

export const getBlogs = async () => {
    try {
    await connectToDb()
     const blogs = await Post.find()
     return blogs
    } catch (error) {
        console.log(error)
    }
}

export const getRecentBlogs = async () => {
    try {
        await connectToDb(); // Ensure you are connected to the database

        const recentBlogs = await Post.find().sort({ createdAt: -1 }).limit(6);
        return recentBlogs;
    } catch (error) {
        console.error(error);
        throw error; // Re-throw the error to handle it in the calling code
    }
};

export const getBlogById = async (id) => {
    try {
        connectToDb();
        const blog = await Post.findById(id);

        if (!blog) {
            // Handle the case where the blog post is not found
            return null;
        }

        // Increment views for the specific blog post
        await blog.incrementViews();

        return blog;
    } catch (error) {
        console.log(error);
    }
};

export const getBlogsByQuery = async (query) => {
    try {
        await connectToDb(); // Ensure you are connected to the database

        const searchResult = query ? await Post.find({
            $or: [
                { title: { $regex: query, $options: 'i' } }, // Case-insensitive title search
                { category: { $regex: query, $options: 'i' } }, // Case-insensitive category search
            ],
        }) : await Post.find();

        return searchResult;
    } catch (error) {
        console.error(error);
        throw error; // Re-throw the error to handle it in the calling code
    }
};

export const getPopularBlogs = async () => {
    try {
        await connectToDb(); // Ensure you are connected to the database

        // Find the most popular blogs based on the number of views, limit to 6
        const popularBlogs = await Post.find().sort({ views: -1 }).limit(6);

        return popularBlogs;
    } catch (error) {
        console.error(error);
        throw error; // Re-throw the error to handle it in the calling code
    }
};