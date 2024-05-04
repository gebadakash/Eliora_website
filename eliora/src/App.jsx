import "./App.css";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import TopBarSection from "./components/TopBarSection";
import NavBar from "./components/NavBar";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoToTop from "./components/GoToTop";
import FixedButtons from "./components/FixedButtons";

const App = () => {
  return (
    <div className="App">
    <ToastContainer position="top-center"></ToastContainer>
      <TopBarSection />
      <NavBar />
      <Outlet />
      <FixedButtons/>
      <GoToTop/>
      <Footer />
    </div>
  );
};

export default App;
