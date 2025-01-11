import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <main className="flex-grow">
        {/* Main content will go here */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;