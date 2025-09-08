import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import studentImage from "@/assets/student-success.jpg";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "National Level Shooter",
    image: studentImage,
    quote: "PNSA transformed my shooting career completely. The personalized training approach and world-class facilities helped me achieve my Olympic dreams. Coach Prakash's guidance has been invaluable in my journey."
  },
  {
    id: 2,
    name: "Arjun Patel",
    role: "State Champion",
    image: studentImage,
    quote: "The mental training and technical expertise at PNSA is unmatched. I've seen tremendous improvement in my accuracy and confidence since joining the academy. Highly recommend to serious shooters."
  },
  {
    id: 3,
    name: "Maya Krishnan",
    role: "Junior Olympic Participant",
    image: studentImage,
    quote: "Starting at PNSA as a beginner, I never imagined I'd compete at the junior Olympics. The comprehensive training program and supportive environment made all the difference in my development."
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

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real Stories
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