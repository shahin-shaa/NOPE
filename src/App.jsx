import React from "react";
import "./Login.jsx";
import Login from "./Login.jsx";
import Registration from "./Registration.jsx";
import { createBrowserRouter, RouterProvider ,Navigate} from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Registration />,
    },
    {
      path: "/",
      element: <Navigate to={'/login'}/>,
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
