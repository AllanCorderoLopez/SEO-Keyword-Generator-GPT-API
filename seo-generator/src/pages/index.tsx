import Functions from "@/root/components/Functions/Functions";
import ParallaxContainer from "@/root/components/Functions/ParallaxContainer";
import PhrasesSkeleton from "@/root/components/Functions/PhrasesSkeleton";
import Navbar from "@/root/components/NavBar/Navbar";
import Footer from "@/root/components/SeoApp/Footer/Footer";
import SeoApp from "@/root/components/SeoApp/SeoApp";
import Jumbotron from "@/root/components/jumbotron/Jumbotron";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <Navbar/>
        <Jumbotron/>
        <Functions/>
        <SeoApp/>
        <Footer />
      </main>
    </div>
  );
}
