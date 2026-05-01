import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NotFound from "./components/NotFound"
import Main from "./layout/Main"
import AboutUsPage from "./pages/AboutUsPage"
import BlogListPage from "./pages/BlogListPage"
import ContactUsPage from "./pages/ContactUsPage"
import HomePage from "./pages/HomePage"
import RecipeDetails from "./pages/RecipeDetails"
import RecipePage from "./pages/RecipePage"
import SingleBlogPage from "./pages/SingleBlogPage"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/recipes',
          element: <RecipePage />
        },
        {
          path: '/recipe-details/:title',
          element: <RecipeDetails />
        },
        {
          path: '/blog-list',
          element: <BlogListPage />
        },
        {
          path: '/blog/:title',
          element: <SingleBlogPage />
        },
        {
          path: '/contact-us',
          element: <ContactUsPage />
        },
        {
          path: '/about-us',
          element: <AboutUsPage />
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
