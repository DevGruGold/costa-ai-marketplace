import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary/10 to-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-primary mb-6">
            Costa Rica's Web3 Marketplace
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Discover authentic Costa Rican products powered by blockchain technology
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button size="lg" className="mr-4">
              Explore Products
            </Button>
            <Button variant="outline" size="lg">
              Connect Wallet
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
    </div>
  );
};

export default Hero;