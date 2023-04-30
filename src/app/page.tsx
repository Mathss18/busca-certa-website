import Banner from "../components/banner/Banner";
import Carousel from "../components/carousel/Carousel";
import CateforyGrid from "../components/category-grid/CategoryGrid";
import Feature from "../components/feature/Feature";
import NavbarMenu from "../components/navbar-menu/NavbarMenu";
import HomeNavbar from "../components/home-navbar/HomeNavbar";

const images = [
  "https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
  "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
  "https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
  "https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg",
];

export default function Home() {
  return (
    <>
      <HomeNavbar />
      {/* <NavbarMenu /> */}
      <Banner />
      <Feature />
      <CateforyGrid />
    </>
  );
}
