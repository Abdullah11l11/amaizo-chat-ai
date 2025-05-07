import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Root from "./routes/Root";
import Loader from "./components/UI/Loader";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

const Home = lazy(() => import("./pages/home/Home"));
const NotFound = lazy(() => import("./pages/not-found/NotFound"));
const Welcome = lazy(() => import("./pages/welcome/Welcome"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Welcome />
      </Suspense>
    ),
  },
  {
    path: "/home",
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader className="bg-jet" color="#ff9478" />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <Suspense fallback={<Loader />}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loader />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
