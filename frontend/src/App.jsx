import { useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import AllRoutes from "./Routes/AllRoutes";

function App() {

  const location = useLocation();
  const hideOnRoutes = ["/login", "/signup"];


  return (
    <>
      <div className="">
        {!(
          location.pathname.startsWith("/dashboard") ||
          hideOnRoutes.includes(location.pathname)
        ) && <Navbar />}
        <AllRoutes />
      </div>
    </>
  );
}

export default App;
