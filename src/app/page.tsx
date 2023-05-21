import Banner from "../components/banner/Banner";
import Benefits from "../components/benefits/Benefits";
import CategoryGrid from "../components/category-grid/CategoryGrid";
import Feature from "../components/feature/Feature";
import Footer from "../components/footer/Footer";
import Mockup from "../components/mockup/Mockup";
import HomeContextProvider from "../modules/home/Home.context";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <HomeContextProvider>
        <Navbar />
        <Banner />
        <Feature />
        <Benefits />
        <Mockup />
        <CategoryGrid />
        <Footer />
      </HomeContextProvider>
    </div>
  );
}
