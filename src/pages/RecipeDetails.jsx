import React, { useState } from "react";
import { recipes } from "../../data/recipes";
import { Link, useParams } from "react-router-dom";
import H1 from "../elements/Heading/H1";
import H3 from "../elements/Heading/H3";
import H4 from "../elements/Heading/H4";
import H5 from "../elements/Heading/H5";
import H6 from "../elements/Heading/H6";
import P3 from "../elements/Description/P3";
import P1 from "../elements/Description/P1";
import User from "../components/User";
import Button2 from "../components/Button2";
import Print from "../assets/svg/Print";
import Share from "../assets/svg/Share";
import P2 from "../elements/Description/P2";
import Subscriber from "../components/Reuse/Subscriber";
import RecommendRecipes from "../components/Reuse/RecommendRecipes";
import MiniRecipeCard from "../components/Reuse/MiniRecipeCard";

const RecipeDetails = () => {
  const [crossed, setCrossed] = useState([]);
  const { title } = useParams();
  const selectedRecipe = recipes.find((recipe) => recipe?.title === title);
  const otherRecipe = recipes
    ?.filter((recipe) => recipe?.title !== title)
    .slice(0, 3);
  const recommandRecipe = recipes
    ?.filter((recipe) => recipe?.title !== title)
    .slice(0, 4);

  const toggleCross = (name) => {
    setCrossed((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };
  return (
    <div className="container mx-auto">
      {/* first row */}
      <div className="grid grid-cols-4 gap-[40px] items-center">
        <div className="col-span-3">
          <H1>{selectedRecipe?.title}</H1>
          <div className="flex gap-10 py-10">
            <User
              userImg=""
              name={selectedRecipe?.author_name}
              data={selectedRecipe?.post_date}
            />
            <Button2 className={``} text="PREP TIME" status="clock">
              {selectedRecipe?.prepare_time}
            </Button2>
            <Button2 className={``} text="PREP TIME" status="clock">
              {selectedRecipe?.cook_time}
            </Button2>
            <Button2 className={``} text="" status="kitchen">
              {selectedRecipe?.categories.join(", ")}
            </Button2>
          </div>
        </div>
        <div className="flex justify-end gap-[32px]">
          <div className="w-[80px] h-[80px] p-7 rounded-full bg-[#E7FAFE] flex flex-col items-center gap-10">
            <Print />
            <P2 className={`uppercase text-[12px]`}>print</P2>
          </div>
          <div className="w-[80px] h-[80px] p-7 rounded-full bg-[#E7FAFE] flex flex-col items-center gap-10">
            <Share />
            <P2 className={`uppercase text-[12px]`}>share</P2>
          </div>
        </div>
      </div>
      {/* 2nd row */}
      <div className="grid grid-cols-4 gap-[40px]">
        <div className="col-span-3">
          <video
            src={selectedRecipe?.video_link}
            controls
            className="w-full h-[600px] rounded-2xl"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="bg-[#E7FAFE] p-8 rounded-xl space-y-3">
          <H5>Nutrition Information</H5>
          <div className="flex justify-between items-center">
            <P3 className={`font-[500] text-black/60`}>Calories</P3>
            <P3 className={`font-[500]`}>
              {selectedRecipe?.nutrition?.calories}
            </P3>
          </div>
          <div className="flex justify-between items-center">
            <P3 className={`font-[500] text-black/60`}>Total Fat</P3>
            <P3 className={`font-[500]`}>
              {selectedRecipe?.nutrition?.total_fat}
            </P3>
          </div>
          <div className="flex justify-between items-center">
            <P3 className={`font-[500] text-black/60`}>Protein</P3>
            <P3 className={`font-[500]`}>
              {selectedRecipe?.nutrition?.protein}
            </P3>
          </div>
          <div className="flex justify-between items-center">
            <P3 className={`font-[500] text-black/60`}>Carbohydrate</P3>
            <P3 className={`font-[500]`}>
              {selectedRecipe?.nutrition?.carbohydrate}
            </P3>
          </div>
          <div className="flex justify-between items-center">
            <P3 className={`font-[500] text-black/60`}>Cholesterol</P3>
            <P3 className={`font-[500]`}>
              {selectedRecipe?.nutrition?.cholesterol}
            </P3>
          </div>
        </div>
      </div>
      <P1 className={``}>{selectedRecipe?.description}</P1>
      {/* 3rd row */}
      <div className="grid grid-cols-4 gap-[40px] py-5">
        <div className="col-span-3">
          <div className="space-y-10">
            {/* Ingredients */}
            <div>
              <H3>Ingredients</H3>
              <H5 className={`py-5`}>For main dish</H5>
              <ul className="space-y-2">
                {selectedRecipe?.ingredients.map((ingredient) => (
                  <li
                    key={ingredient?.name}
                    className="flex items-center gap-3 cursor-pointer border-b border-gray-400 py-1"
                    onClick={() => toggleCross(ingredient?.name)}
                  >
                    <input
                      type="checkbox"
                      checked={crossed.includes(ingredient?.name)}
                      readOnly
                      className="w-5 h-5 rounded-full border-gray-400 bg-black"
                    />
                    <span
                      className={
                        crossed.includes(ingredient?.name)
                          ? "line-through text-gray-500"
                          : ""
                      }
                    >
                      {ingredient?.name} ( {ingredient?.quantity} )
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Directions */}
            <div>
              <H3>Directions</H3>
              <H5 className={`py-5`}></H5>
              <ul className="space-y-2">
                {selectedRecipe?.directions.map((direction) => (
                  <div>
                    <H5>Step {direction?.step} : </H5>
                    <P1>{direction?.instruction}</P1>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <H4>Other Recipe</H4>
          <div className="flex flex-col gap-2">
            {otherRecipe?.map((recipe) => (
              <Link to={`/recipe-details/${recipe?.title}`} key={recipe?.id}>
                <MiniRecipeCard image={recipe?.image} title={recipe?.title} author_name={recipe?.author_name}/>
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
      {/* 4th row */}
      <div className="py-10 space-y-10">
        <Subscriber />
        <RecommendRecipes headingTitle='You may like these recipe too' propsTitle={title} lastIndex={4} />
      </div>
    </div>
  );
};

export default RecipeDetails;
