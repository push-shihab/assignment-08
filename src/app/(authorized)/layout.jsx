import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export const metadata = {
  title: "SunCart - Products",
  description: "All Summer Essentials Products",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
}
