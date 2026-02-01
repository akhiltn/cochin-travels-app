import banner from "../assets/banner.png";
import Banner from "@/components/Banner";
import About from "./About";
import Services from "./Services";
import ContactUs from "./ContactUs";
import PackageTypes from "./PackageTypes";

export default function Home() {
  return (
    <>
      <section id="home" style={{ scrollMarginTop: "80px" }}>
        <Banner src={banner} />
      </section>

      <section id="services" style={{ scrollMarginTop: "80px" }}>
        <Services />
      </section>

      <section id="about" style={{ scrollMarginTop: "80px" }}>
        <About />
      </section>

      <section id="contactus" style={{ scrollMarginTop: "80px" }}>
        <ContactUs />
      </section>

      <section id="packagetypes" style={{ scrollMarginTop: "80px" }}>
        <PackageTypes />
      </section>
    </>
  );
}
