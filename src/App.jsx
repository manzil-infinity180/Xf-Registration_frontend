import {QueryClientProvider} from "@tanstack/react-query";
import {queryclient} from "./utils/http";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import {Login} from "./auth/Login";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {Register} from "./auth/Register";
import {Toaster} from "react-hot-toast";
import { Overview } from "./components/Overview";
import SearchRegistee from "./components/SearchRegistee";
import { AddressForm } from "./components/RegisterDemo";
import {GetMe} from "./auth/GetMe"
import { UsernameUpdate } from "./auth/UsernameUpdate";
import { UploadImages } from "./components/UploadImages";
import OtherDetails from "./components/OtherDetails";
const router = createBrowserRouter([
  {
    path:'/login',
    element: <Login />
  
  },
  {
    path:'/me',
    element: <GetMe />
  
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
    element : <UsernameUpdate />
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
    path:'/profile/:username',
    element : <OtherDetails />
  },
  {
    path:'*',
    element:<h1>Welcome</h1>
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
