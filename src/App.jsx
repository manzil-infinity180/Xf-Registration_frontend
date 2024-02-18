import {QueryClientProvider} from "@tanstack/react-query";
import {queryclient} from "./utils/http";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Login from "./components/LoginPage/LoginPage";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Register from "./components/Register/Register";
import {Toaster} from "react-hot-toast";
import { Overview } from "./components/Overview";
import SearchRegistee from "./components/SearchRegistee";
import { UploadImages } from "./components/UploadImages";
import Content from "./components/Content/Content";
import MainUserContent from "./components/MainUserContent/MainUserContent";
import Myself from "./components/Myself/Myself";
import { ProfileUpdate } from "./components/ProfileUpdate/ProfileUpdate";
import UpdateUsername from "./components/UpdateUsername/UpdateUsername";
import UploadProject from "./components/UploadProject/UploadProject";
import UpdateProject from "./components/UpdateProject/UpdateProject";
const router = createBrowserRouter([
  {
    path:'/login',
    element: <Login />
  
  },
  {
    path:'/me',
    element: <Myself />
  
  },
  {
    path:'/register',
    element: <Register />
  
  },
  {
    path:'/overview',
    element : <Overview />
  },
  {
    path:'/update',
    element : <UpdateUsername />
  },
  {
    path:'/search',
    element : <SearchRegistee />
  },
  {
    path:'/upload-img',
    element : <UploadImages />
  },
  {
    path:'/update-profile',
    element:<ProfileUpdate />
  },
  {
      path:'/project',
      element:<UploadProject />
  },
  {
    path:'/profile/:username',
    element : <MainUserContent />
  },
  {
    path:'/me/edit/:id',
    element:<UpdateProject />
  },
  {
    path:'*',
    element:<Content />
  },
])
function App() {
  return (
   <QueryClientProvider client={queryclient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
    <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              backgroundColor: "white",
              color: "green",
              border: "1px solid green",
              padding: "15px",
              marginRight: "20px",
            },
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
          },
          error: {
            style: {
              backgroundColor: "white",
              color: "red",
              border: "1px solid red",
              padding: "15px",
              marginRight: "20px",
            },
            iconTheme: {
              primary: "red",
              secondary: "white",
            },
          },
        }}
      />
   </QueryClientProvider>
  )
}

export default App
