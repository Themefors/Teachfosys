import WhoWeAre from "@/Components/Home/WhoWeAre/WhoWeAre";
import Hero from "../Components/Home/Hero/Hero";

export const metadata = {
  title: "TeachFosys | Website Design & Development",
  description: "TeachFosys builds modern websites, e-commerce stores, and digital solutions for businesses.",
  keywords: "TeachFosys, web design, web development, ecommerce, digital agency",
};

export default function Home() {
  return (
      <div>
      <Hero />
      <WhoWeAre />
    </div>
  );
}
