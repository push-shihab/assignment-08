import Banner from "@/components/bannerSlider/Banner";
import PopularProducts from "@/components/products/PopularProducts";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <PopularProducts></PopularProducts>
    </div>
  );
}
