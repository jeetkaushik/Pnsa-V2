import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const founderImage = "/lovable-uploads/c11516d1-3102-4a67-ac8b-b83b08f73a06.png";

export default function FounderSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Images */}
          <div className="relative">
            <div>
              <img 
                src={founderImage} 
                alt="Prakash Nanjappa" 
                className="w-full h-auto object-contain shadow-elegant"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Founder & CEO
            </h2>
            
            <div className="max-w-none text-gray-700 mb-6 font-inter leading-relaxed space-y-4">
              <p>
                Prakash Nanjappa is a distinguished Indian shooter renowned for his 
                exceptional skills in the 10-meter air pistol and 50-meter pistol events. 
                Representing India on the international stage, he has showcased remarkable 
                precision and determination, earning him a revered spot among the country's 
                top athletes. His career is marked by a series of notable achievements, 
                including representing India at the prestigious Olympic Games.
              </p>
              
              <p>
                Further cementing his legacy in Indian sports, Prakash was honored with 
                the Arjuna Award, one of the highest accolades for sports excellence in 
                India, recognizing his significant contributions and outstanding performance 
                in shooting. Prakash Nanjappa's journey is a testament to his relentless 
                pursuit of excellence and his unwavering dedication to his sport. He has 
                brought laurels to our country by winning at various international 
                competitions like: World Cup, Asian Games, Commonwealth Games, Asian 
                Championship and Commonwealth Championship.
              </p>
            </div>

            <Button asChild variant="orange" size="lg">
              <Link to="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}