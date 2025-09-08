import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const heroImage = "/lovable-uploads/31e5ddd3-f508-4ba9-9c52-5cc6e6665d00.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-pnsa-dark">
      <div className="flex flex-col md:flex-row">
        {/* Left Content - 50% width */}
        <div className="w-full md:w-1/2 px-6 lg:px-8 py-10 md:py-16 lg:py-24 text-white order-2 md:order-1">
          <div className="max-w-lg mx-auto lg:mx-0 pl-8 lg:pl-12">
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              PRAKASH NANJAPPA
              <br />
              <span className="text-4xl lg:text-6xl">SHOOTING</span>
              <br />
              <span className="text-4xl lg:text-6xl">ACADEMY</span>
            </h1>
            <p className="text-base lg:text-lg text-white/90 mb-8 leading-relaxed font-inter">
              Over the years, PNSA has proudly produced several international and 
              national-level players, showcasing the efficacy of our training 
              programs and coaching staff. Our goal reach extends beyond our 
              academy walls. We collaborate with schools to provide shooting 
              facilities and opportunities, set up shooting ranges and fostering 
              budding talents at grassroots levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/about">About</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image - 50% width, on top for mobile */}
        <div className="w-full md:w-1/2 relative order-1 md:order-2">
          <img 
            src={heroImage} 
            alt="PNSA shooting competition winners ceremony" 
            className="w-full h-64 md:h-screen object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pnsa-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pnsa-green/10 rounded-full blur-3xl"></div>
    </section>
  );
}