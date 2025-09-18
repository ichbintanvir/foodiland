import React from "react";
import { useParams } from "react-router-dom";
import { SingleBlog } from "../../utils/blogsdata";
import H1 from "../elements/Heading/H1";
import User2 from "../components/User2";
import P1 from "../elements/Description/P1";
import H7 from "../elements/Heading/H7";
import H5 from "../elements/Heading/H5";
import BlackFB from "../assets/svg/BlackFB";
import BlackTwitter from "../assets/svg/BlackTwitter";
import BlackInstagram from "../assets/svg/BlackInstagram";
import Subscriber from "../components/Reuse/Subscriber";
import RecommendRecipes from "../components/Reuse/RecommendRecipes";

const SingleBlogPage = () => {
  const { title } = useParams();
  const data = SingleBlog(title);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center space-y-8">
        <H1 className={`text-center`}>{data?.blog_title}</H1>
        <User2
          userImg={data?.author_img}
          name={data?.author_name}
          data={data?.post_date}
        />
        <P1>{data?.post_sort_description}</P1>
      </div>
      <div className="w-full h-[600px] overflow-hidden rounded-2xl my-16">
        <img
          src={data?.post_img}
          alt={data?.id}
          className="w-full h-full object-fill"
        />
      </div>
      <div className="mx-[75px] grid grid-cols-7 gap-[49px]">
        <div className="col-span-6">
          {data?.post_details.map((eachDetail) => (
            <div key={eachDetail?.id} className="py-10 space-y-3">
              <H5>{eachDetail?.title}</H5>
              {
                eachDetail?.image_link && (
                    <img src={eachDetail?.image_link} alt={eachDetail?.id} className="w-full h-[600px] rounded-2xl object-fill"/>
                )
              }
              {
                eachDetail?.video_link &&
              (<video
                src={eachDetail?.video_link}
                controls
                className="w-full h-[600px] rounded-2xl"
              >
                Your browser does not support the video tag.
              </video>)
              }
              <P1 className={`text-black/60`}>{eachDetail?.description}</P1>
            </div>
          ))}
        </div>
        <div className="w-[131px] py-10">
          <H7 className={`text-[14px]`}>SHARE THIS ON:</H7>
          <div className="flex flex-col items-center gap-5 py-5">
            <BlackFB/>
            <BlackTwitter/>
            <BlackInstagram/>
          </div>
        </div>
      </div>
      <div>
        <Subscriber/>
        <RecommendRecipes headingTitle='Check out the delicious recipe' lastIndex={4} />
      </div>
    </div>
  );
};

export default SingleBlogPage;
