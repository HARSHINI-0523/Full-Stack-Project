import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import RootLayout from "./RootLayout";
import RoutingError from "./components/RoutingError";
import Home from "./components/home/Home";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      errorElement: <RoutingError />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ]
    }
  ]);

  return (
    <div className="main">
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
