import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./routes/Root";
import theme from "./config/theme";
import Home, { loader as homeLoader } from "./routes/Home";
import Browse from "./routes/Browse";
import Game from "./routes/Game";
import Platforms from "./routes/Platforms";
import Stores from "./routes/Stores";
import Collections from "./routes/Collections";
import Reviews from "./routes/Reviews";
import Genres from "./routes/Genres";
import Creators from "./routes/Creators";
import Tags from "./routes/Tags";
import Developers from "./routes/Developers";
import Publishers from "./routes/Publishers";
import Platform_ID from "./routes/Platform_ID";
import Genres_ID from "./routes/Genres_ID";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      { path: "/games", element: <Game /> },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/platforms",
        element: <Platforms />,
      },
      {
        path: "/stores",
        element: <Stores />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/genres",
        element: <Genres />,
      },
      {
        path: "/creators",
        element: <Creators />,
      },
      {
        path: "/tags",
        element: <Tags />,
      },
      {
        path: "/developers",
        element: <Developers />,
      },
      {
        path: "/publishers",
        element: <Publishers />,
      },
      { path: "/platforms/:id", element: <Platform_ID /> },
      { path: "/genres/:id", element: <Genres_ID /> },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
