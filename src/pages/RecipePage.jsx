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
      <div className='max-w-screen-xl mx-auto py-5'>
        <h2 className="text-2xl font-bold text-black">Available Recipes : {recipes?.length}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {
            recipes?.map(recipe => (
              <div className='hover:bg-gray-100 rounded-2xl p-2 transition-colors duration-300 space-y-3'>
                <img src={recipe?.image} alt={recipe?.name} className='rounded-2xl' />
                <div className='flex justify-between items-center'>
                  <p className='text-black text-[16px]'><span className='font-bold'>Prep Time: </span>{recipe?.prepTimeMinutes} min</p>
                  <p className='text-black text-[16px]'><span className='font-bold'>Cook Time: </span>{recipe?.cookTimeMinutes} min</p>
                </div>
                <h2 className='text-black font-bold text-xl'>{recipe?.name}</h2>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default RecipePage