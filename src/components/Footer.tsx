import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Footer = () => {
  const [email] = useState("xmrtsolutions@gmail.com");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would handle the subscription here
    toast.success("Subscription successful!");
  };

  return (
    <footer className="bg-primary/5 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Costa Rica Web3 Marketplace</h3>
            <p className="text-gray-600 mb-4">
              Bringing blockchain technology to Costa Rica's finest products.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                value={email}
                readOnly
                className="max-w-xs"
                placeholder="Enter your email"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Products</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Discord</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Telegram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Costa Rica Web3 Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;