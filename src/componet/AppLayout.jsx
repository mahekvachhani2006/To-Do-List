import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { AllToDo } from "./AllToDo";
import { Register } from "./Register";
import ToDoDetail from "./ToDoDetail";
import { Layout } from "./Layout";
import { Login } from "./Login";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Layout />
      </PrivateRouter>
    ),

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "alltodo",
        element: <AllToDo />,
      },
      {
        path: "tododetail/:id",
        element: <ToDoDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
