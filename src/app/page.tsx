import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import ScrollMarquee from "@/components/ScrollMarquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Header />
      <main id='main' tabIndex={-1} className='outline-none'>
        <Hero />
        <Statement />
        <About />
        <Projects />
        <Experience />
        <Services />
        <ScrollMarquee />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default page;
