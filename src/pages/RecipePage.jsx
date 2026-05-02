import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState();
  const [modal, setModal] = useState(false);

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
              <div onClick={() => { setModal(!modal); setSelectedRecipe(recipe) }} className='cursor-pointer hover:bg-gray-100 rounded-2xl p-2 transition-colors duration-300 space-y-3'>
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
      {
        modal &&
        (<div className='fixed w-full h-full inset-0 bg-black/50 z-[999999999999999999999999999]'>
          <button onClick={() => setModal(!modal)} className='text-red-500 font-bold cursor-pointer flex justify-end m-5'>Close</button>
          <div className='w-11/12 lg:w-1/2 h-[80vh] mx-auto bg-white p-3 overflow-y-scroll space-y-2'>
            <img src={selectedRecipe?.image} alt={selectedRecipe?.name} className="w-full h-1/2" />
            <h2 className='text-2xl font-bold text-black'>{selectedRecipe?.name}</h2>
            <div className='flex flex-wrap justify-between items-center py-3'>
              <p>Meal Type: <span>{selectedRecipe?.mealType}</span></p>
              <p>Prep Time: <span>{selectedRecipe?.prepTimeMinutes}</span></p>
              <p>Cook Time: <span>{selectedRecipe?.cookTimeMinutes}</span></p>
              <p>Calory: <span>{selectedRecipe?.caloriesPerServing}</span></p>
              <p>Cuisine: <span>{selectedRecipe?.cuisine}</span></p>
            </div>
            <h3 className='text-xl font-bold text-black'>Ingredients</h3>
            <ol>
              {
                selectedRecipe?.ingredients?.map((list, index) => <li key={index} className='list-decimal ml-10'>{list}</li>)
              }
            </ol>
            <h3 className='text-xl font-bold text-black'>Instructions</h3>
            <ol>
              {
                selectedRecipe?.instructions?.map((list, index) => <li key={index} className='list-decimal ml-10'>{list}</li>)
              }
            </ol>
          </div>
        </div>)
      }
    </div>
  )
}

export default RecipePage