import { createBrowserRouter, RouterProvider } from "react-router-dom"
import KitchenItem from "./assets/svg/KitchenItem"
import Menu from "./assets/svg/Menu"
import Button from "./components/Button"
import Button2 from "./components/Button2"
import User from "./components/User"
import Main from "./layout/Main"
import NotFound from "./components/NotFound"
import HomePage from "./pages/HomePage"
import RecipeDetails from "./pages/RecipeDetails"
import BlogListPage from "./pages/BlogListPage"
import SingleBlogPage from "./pages/SingleBlogPage"
import ContactUsPage from "./pages/ContactUsPage"
import AboutUsPage from "./pages/AboutUsPage"
import RecipePage from "./pages/RecipePage"

function App() {
  const router= createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      children:[
        {
          path:'/',
          element:<HomePage/>
        },
        {
          path:'/recipes',
          element:<RecipePage/>
        },
        {
          path:'/recipe-details/:title',
          element:<RecipeDetails/>
        },
        {
          path:'/blog-list',
          element:<BlogListPage/>
        },
        {
          path:'/blog/:title',
          element:<SingleBlogPage/>
        },
        {
          path:'/contact-us',
          element:<ContactUsPage/>
        },
        {
          path:'/about-us',
          element:<AboutUsPage/>
        }
      ]
    },
    {
      path:'*',
      element:<NotFound/>
    }
  ])
  return (
    <RouterProvider router={router}/>
    // <div className="font-inter">
    //   <h1 className="text-2xl text-blue-600">Hello world</h1>
    //   <Button>Hello</Button>
    //   <Button className={`bg-black text-white`} variety='btn2' status='video'>view recipes</Button>
    //   <Button className={`flex-row-reverse bg-black text-white`} variety='btn2' status='video'>view recipes</Button>
    //   <Button className={`flex-row-reverse bg-black text-white`}status=''>view recipes</Button>
    //   <Menu/>
    //   <KitchenItem/>
    //   <Button2 className={`bg-red-400`} text='PREP TIME' status='clock'>30 minutes</Button2>
    //   <Button2 className={`bg-red-400`} status='kitchen'>30 minutes</Button2>
    //   <User userImg='/man.svg' name='John Smith' data='15 March 2022'/>
    // </div>
  )
}

export default App
