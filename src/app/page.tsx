import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Videos from "@/components/Videos";
import Support from "@/components/Support";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import StarryBackground from "@/components/StarryBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 relative overflow-hidden">
      <StarryBackground />
      <FloatingParticles />
      <Header />
      <Hero />
      <About />
      <Videos />
      <Support />
      <Footer />
    </main>
  );
}
