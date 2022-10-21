import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Catagory/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import LoginForm from "../../Pages/Login/LogInForm/LoginForm";
import RegisterForm from "../../Pages/Login/RegisterForm/RegisterForm";
import News from "../../Pages/News/News/News";
import TearmsAndCondition from "../../Pages/Shared/Others/TermsAndConditions/TearmsAndCondition";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "news/:id",
        element: (
          <PrivateRoutes>
            <News></News>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/login",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/register",
        element: <RegisterForm></RegisterForm>,
      },
      {
        path: "/termsandconditions",
        element: <TearmsAndCondition></TearmsAndCondition>,
      },
    ],
  },
]);
