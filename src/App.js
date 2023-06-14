import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import router from "./routes/Routes";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>

      {/* https://backend-theta-five.vercel.app */}
    </div>
  );
}

export default App;
