import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Filterd from "../Home/Filtered";
import Alluser from "../Home/Alluser";
import Topcities from "../Home/Topcities";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Alluser></Alluser>,
      },
      {
        path: "/filtered",
        element: <Filterd></Filterd>,
      },
      {
        path: "/top-cities",
        element: <Topcities></Topcities>,
      },
    ],
  },
]);
