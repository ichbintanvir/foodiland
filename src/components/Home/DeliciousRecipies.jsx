import RecommendRecipes from "../Reuse/RecommendRecipes";

const DeliciousRecipies = () => {
  const title = "Try this delicious recipe to make your day";
  const description =
    "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim";
  return (
    <div className="container mx-auto">
      <RecommendRecipes headingTitle={title} description={description} lastIndex={8} column={4} sectionHeading='heading2' styles={``}/>
    </div>
  );
};

export default DeliciousRecipies;
