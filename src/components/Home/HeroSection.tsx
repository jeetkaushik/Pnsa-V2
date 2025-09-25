import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import hero1 from "@/assets/Hero1.jpeg";
import hero2 from "@/assets/Hero2.jpeg";
import hero3 from "@/assets/Hero3.jpeg";
import hero4 from "@/assets/Hero4.jpeg";


const heroImages = [
  hero1,
  hero2,
  hero3,
  hero4,
];

export default function HeroSection() {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(null)

  React.useEffect(() => {
    if (!carouselApi) return
    const intervalId = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext()
      } else {
        carouselApi.scrollTo(0)
      }
    }, 5000)
    return () => clearInterval(intervalId)
  }, [carouselApi])
  return (
    <section className="relative overflow-hidden bg-pnsa-dark">
      <div className="flex justify-center items-centre flex-col md:flex-row">
        {/* Left Content - 50% width */}
        <div className="flex justify-center items-centre w-full md:w-1/2 px-6 lg:px-8 py-10 md:py-16 lg:py-24 text-white order-2 md:order-1">
          <div className="flex justify-center items-centre flex-col max-w-2lg mx-auto lg:mx-0 pl-8 lg:pl-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              PRAKASH NANJAPPA SHOOTING ACADEMY
            </h1>
            <p className="text-base lg:text-lg text-white/90 mb-8 leading-relaxed font-inter">
              Founded by Olympian and Arjuna Awardee Prakash Nanjappa, PNSA is dedicated to nurturing the next generation of shooting champions. With world-class coaching, structured training programs, and a focus on discipline and precision, we provide a professional environment for beginners, enthusiasts, and elite shooters. Over the years, PNSA has proudly produced several international and national-level players, showcasing the efficacy of our training programs and coaching staff.
              Join us and experience the journey from fundamentals to the podium.
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

        {/* Right Image Slider - 50% width, on top for mobile */}
        <div className="w-full md:w-1/2 relative order-1 md:order-2">
          <Carousel className="w-full" aria-label="Hero image slider" opts={{ loop: true }} setApi={setCarouselApi}>
            <CarouselContent>
              {heroImages.map((src, idx) => (
                <CarouselItem key={idx}>
                  <div className="relative">
                    <img
                      src={src}
                      alt={`PNSA hero slide ${idx + 1}`}
                      className="w-full h-64 sm:h-80 md:h-screen object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 md:left-6" />
            <CarouselNext className="right-3 top-1/2 -translate-y-1/2 md:right-6" />
          </Carousel>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pnsa-orange/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pnsa-green/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}