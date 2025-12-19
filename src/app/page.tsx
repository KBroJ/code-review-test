import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Videos from "@/components/Videos";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Videos />
      <Support />
      <Footer />
    </main>
  );
}
