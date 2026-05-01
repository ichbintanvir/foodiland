import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);

  async function fetchData() {
    const res = await fetch('https://dummyjson.com/recipes');
    const data = await res?.json();
    setRecipes(data?.recipes);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <Helmet>
        <title>Recipe Page</title>
        <meta name="description" content="Welcome to the recipepage" />
      </Helmet>
      <p>
        RecipePage ,total recipe found {recipes?.length}
      </p>
    </div>
  )
}

export default RecipePage