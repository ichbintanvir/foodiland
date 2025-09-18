import { blogs } from "../data/blogs";

const allBlogs = blogs;

export function AllBlogs(){
    return allBlogs;
}

export function SliceBlog(from=0,to){
    const sliceBlogs = allBlogs.slice(from,to)
    return sliceBlogs
}

export function SingleBlog(title){
    const singleBlog = allBlogs.find(blog=>blog.blog_title===title);
    return singleBlog;
}