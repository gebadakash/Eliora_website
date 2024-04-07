import "./App.css";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import TopBarSection from "./components/TopBarSection";
import NavBar from "./components/NavBar";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoToTop from "./components/GoToTop";
import WhatsApp from "./components/WhatsApp";
import Phone from "./components/Phone";

const App = () => {
  return (
    <div className="App">
    <ToastContainer position="top-center"></ToastContainer>
      <TopBarSection />
      <NavBar />
      <Outlet />
      <Phone/>
      <WhatsApp/>
      <GoToTop/>
      <Footer />
    </div>
  );
};

export default App;
