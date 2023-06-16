import Footer from "@/root/components/SeoApp/Footer/Footer";
import SeoApp from "@/root/components/SeoApp/SeoApp";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
        <SeoApp />
        <Footer />
      </main>
    </div>
  );
}
