import React from "react";
import BlogHeading from "../components/bloglist/BlogHeading";
import Input from "../components/Reuse/Input";
import User2 from "../components/User2";
import { blogs } from "../../data/blogs";
import BlogCard from "../components/Reuse/BlogCard";
import H4 from "../elements/Heading/H4";
import { Link } from "react-router-dom";
import MiniRecipeCard from "../components/Reuse/MiniRecipeCard";
import { SliceRecipies } from "../../utils/recipiesdata";

const BlogListPage = () => {
  const otherRecipe = SliceRecipies(0, 3);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center">
        <BlogHeading />
        <Input />
        {/* <User2 userImg={`/chef.svg`} name='Wade Warren' data='12 November 2021'/> */}
        <div className="grid grid-cols-4 gap-[40px] py-10">
          <div className="col-span-3 flex flex-col gap-[32px]">
            {blogs?.map((blog) => (
              <Link to={`/blog/${blog?.blog_title}`}>
                <BlogCard
                  key={blog?.id}
                  blog_img={blog?.post_img}
                  blog_title={blog?.blog_title}
                  author_name={blog?.author_name}
                  author_img={blog?.author_img}
                  blog_description={blog?.post_sort_description}
                  published_date={blog?.post_date}
                />
              </Link>
            ))}
          </div>
          <div>
            <H4>Tasty Recipes</H4>
            <div className="flex flex-col gap-2">
              {otherRecipe?.map((recipe) => (
                <Link to={`/recipe-details/${recipe?.title}`} key={recipe?.id}>
                  <MiniRecipeCard
                    image={recipe?.image}
                    title={recipe?.title}
                    author_name={recipe?.author_name}
                  />
                </Link>
              ))}
            </div>
            <div className="w-full max-h-[436px] mt-5">
              <img
                src="/poster.svg"
                alt="poster"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
