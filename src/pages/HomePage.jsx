import Hero from "../components/home/Hero";
import Intro from "../components/home/Intro";
import Services from "../components/home/Services";
import Work from "../components/home/Work";
import About from "../components/home/About";
import Blog from "../components/home/Blog";
import useSmoothScroll from "../hooks/useSmoothScroll";

export default function HomePage() {
  useSmoothScroll();

  return (
    <>
        <Hero />
        <Intro />
        <Services />
        <Work />
        <About />
        <Blog />
    </>
  );
}