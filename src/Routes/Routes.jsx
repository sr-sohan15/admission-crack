import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home";
import ScienceHome from "../Pages/Science/ScienceHome";
import SubjectHacks from "../Pages/SubjectHacks";
import MockExam from "../Pages/MockExam"; // অথবা ScienceMock
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
        path: "/science/mock", // <--- এই পাথটি মিসিং ছিল
        element: <MockExam />
      },
      {
        path: "/mock-exam", // <--- টপ ন্যাভবার সাপোর্ট
        element: <MockExam />
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />
      }
    ]
  }
]);