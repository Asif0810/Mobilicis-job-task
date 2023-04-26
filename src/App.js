import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Filtered";
import Navbar from "./Navbar/Navbar";
import { RouterProvider } from "react-router-dom";
import { route } from "./Router/Router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
