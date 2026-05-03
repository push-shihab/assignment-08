import Banner from "@/components/bannerSlider/Banner";
import PopularProducts from "@/components/products/PopularProducts";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import SummerTips from "@/components/tips/SummerTips";
import TopBrands from "@/components/topBrands/TopBrands";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <PopularProducts></PopularProducts>
      <SummerTips></SummerTips>
      <TopBrands></TopBrands>
      <Footer></Footer>
    </div>
  );
}
