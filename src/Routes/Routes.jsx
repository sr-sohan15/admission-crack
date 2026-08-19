import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home";
import ScienceHome from "../Pages/Science/ScienceHome";
import SubjectHacks from "../Pages/SubjectHacks";
import MockExam from "../Pages/MockExam";
import Bookmarks from "../Pages/Bookmarks";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/science",
        element: <ScienceHome />
      },
      {
        path: "/science/subject/:subjectId",
        element: <SubjectHacks />
      },
      {
        path: "/science/mock",
        element: <MockExam />
      },
      {
        path: "/mock-exam",
        element: <MockExam />
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />
      }
    ]
  }
], {
  basename: "/admission-crack"
});