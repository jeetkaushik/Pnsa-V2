import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Testi1 from "@/assets/testi1.png";
import Testi2 from "@/assets/testi2.png";
import Testi3 from "@/assets/testi3.png";
import Testi4 from "@/assets/testi4.png";


const testimonials = [
  {
    id: 1,
    name: "Trishna N.D",
    role: "Air Pistol Shooter",
    image: Testi1,
    quote: "I joined Prakash Nanjappa Shooting Academy two years ago, and it has been an incredible journey ever since. In this short span, I have won over 50+ medals at various competitions, and the experience of training under the guidance of an Olympian has truly transformed my game. The structured training, constant motivation, and expert mentorship at PNSA have helped me grow both technically and mentally as an athlete. I am proud to be a part of this academy and excited for what lies ahead!"
  },
  {
    id: 2,
    name: "Siddhanth Ajay",
    role: "Air Rifle Shooter",
    image: Testi2,
    quote: "I joined Prakash Nanjappa Shooting Academy (PNSA) when I was just 8 years old. In a short span of time, I have had the opportunity to learn a lot and have already won a couple of medals at various competitions. Training at PNSA has been a great experience—the coaches are very supportive, and the environment is both professional and encouraging. I am excited to continue my journey in shooting and keep improving every day!"
  },
  {
    id: 3,
    name: "Nithyashree",
    role: "International Athlete",
    image: Testi3,
    quote: "I'm Nithyashree, an international athlete with over 15 years of experience in sports. Recently, I decided to explore the world of shooting sports and joined Prakash Nanjappa Shooting Academy (PNSA). It has been a truly wonderful experience. Learning under the guidance of Olympian and Arjuna Awardee Prakash Nanjappa and his team has been inspiring. The professionalism, attention to detail, and supportive training environment at PNSA have given me a fresh perspective on excellence in sport. Whether you are new to shooting or coming from another sport like me, PNSA is the perfect place to begin your journey."
  },
  {
    id: 4,
    name: "Bhoomika",
    role: "Air Rifle Shooter",
    image: Testi4,
    quote: "I'm a rifle shooter and have won a couple of medals in my journey so far. Training at Prakash Nanjappa Shooting Academy (PNSA) has been a truly enriching experience. Under the guidance of the coaches and the supportive training team, I have not only improved my technical skills but also gained confidence and mental strength. The training environment at PNSA is professional, disciplined, and motivating—perfect for anyone serious about excelling in shooting sports. I am grateful to be a part of this journey!"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Shining Stars
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Testimonial Content */}
          <div className="relative">
            <Quote className="h-16 w-16 text-pnsa-orange/20 mb-6" />
            
            <blockquote className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed font-inter">
              "{currentTestimonial.quote}"
            </blockquote>
            
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900">
                {currentTestimonial.name}
              </h4>
              <p className="text-gray-600 font-inter">{currentTestimonial.role}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex 
                        ? "bg-pnsa-orange" 
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right - Student Image */}
          <div className="relative">
            <div className="relative overflow-hidden shadow-elegant">
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.name}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}