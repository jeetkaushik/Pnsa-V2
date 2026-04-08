import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// const founderImage = "/lovable-uploads/c11516d1-3102-4a67-ac8b-b83b08f73a06.png";
import founderhome from "@/assets/Founder-home.png"

export default function FounderSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Side - Images */}
          <div className="relative">
            <div>
              <img 
                src={founderhome} 
                alt="Prakash Nanjappa" 
                className="w-6/10 h-auto object-contain shadow-elegant"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-5xl lg:text-5xl font-bold text-gray-900 mb-6">
              Founder & CEO
            </h2>
            
            <div className="max-w-none text-gray-700 mb-6 font-inter leading-relaxed space-y-4">
              <p>
                Prakash Nanjappa, Founder & CEO of Prakash Nanjappa Shooting Academy (PNSA), is one of India's most accomplished and respected pistol shooters, with an illustrious career spanning national and international success. He has represented India at the highest level, including the Olympic Games (Rio 2016), where he competed as one of the country's finest shooting athletes. His journey is marked by exceptional precision, discipline, and a relentless pursuit of excellence.
              </p>
              
              <p>
                He is a proud recipient of the prestigious Arjuna Award, one of India's highest honors in sports, recognizing his outstanding contribution and achievements in shooting. Over the years, he has brought immense pride to the nation by winning medals at premier international competitions, including the ISSF World Cup, Asian Games, Commonwealth Games, Asian Championships, and Commonwealth Championships.
              </p>
              <p>With an impressive tally of multiple international medals (Gold, Silver, and Bronze) and over 45+ national medals, he has consistently been among India's top performers in shooting sports. His achievements include winning an Olympic quota, securing podium finishes at global championships, and setting national records. He is also a qualified sports psychologist and management professional, combining technical expertise with a scientific approach to athlete development.</p>
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