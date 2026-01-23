import PackageCarousel from "@/components/PackageCarousel";
import banner from "../assets/banner.png";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <>
      <Banner src={banner} />
      <PackageCarousel />
    </>
  );
}
