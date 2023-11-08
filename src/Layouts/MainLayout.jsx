import { Outlet } from "react-router-dom";
import NavBar from '../Pages/Header/NavBar/NavBar'
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div className="min-h-screen">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;