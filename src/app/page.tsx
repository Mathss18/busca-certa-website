import Banner from "../components/banner/Banner";
import CategoryGrid from "../components/category-grid/CategoryGrid";
import Feature from "../components/feature/Feature";
import Footer from "../components/footer/Footer";
import HomeContextProvider from "../modules/home/Home.context";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <HomeContextProvider>
        <Navbar />
        <Banner />
        <Feature />
        <CategoryGrid />
        <Footer />
      </HomeContextProvider>
    </div>
  );
}
