import { recipes } from "../../../data/recipes";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import SectionHeading from "../SectionHeading";
import SectionHeading2 from "../SectionHeading2";

const RecommendRecipes = ({
  headingTitle,
  description,
  propsTitle,
  lastIndex,
  column = 4,
  styles,
  sectionHeading = "heading1",
}) => {
    const columnClass = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
}[column] || 'lg:grid-cols-1';
  const remainingRecipes = recipes.filter(
    (recipe) => recipe?.title !== propsTitle
  );
  const recommandRecipe = remainingRecipes?.slice(0, lastIndex);
  return (
    <div className="container mx-auto py-10">
      {sectionHeading === "heading2" ? (
        <SectionHeading2
          title={headingTitle}
          description={description}
          className={`${styles}`}
        />
      ) : (
        <SectionHeading
          title={headingTitle}
          description={description}
          className={`${styles}`}
        />
      )}
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${columnClass} gap-10`}>
        {recommandRecipe?.map((recipe) => (
          <Link to={`/recipe-details/${recipe?.title}`}>
            <RecipeCard
              key={recipe?.id}
              title={recipe?.title}
              cook_time={recipe?.cook_time}
              categories={recipe?.categories}
              img={recipe?.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendRecipes;
