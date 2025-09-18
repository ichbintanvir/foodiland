import RecommendRecipes from "../Reuse/RecommendRecipes";

const TastyRecipies = () => {
  const title = "Simple and tasty recipes";
  const description =
    "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim";
  return (
    <div className="container mx-auto">
      <RecommendRecipes headingTitle={title} description={description} lastIndex={9} column={3}/>
    </div>
  );
};

export default TastyRecipies;
