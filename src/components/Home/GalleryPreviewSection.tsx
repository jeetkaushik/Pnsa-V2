import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-shooting-range.jpg";
import studentImage from "@/assets/student-success.jpg";
import prakashImage from "@/assets/prakash-nanjappa.jpg";

const galleryImages = [
  {
    id: 1,
    src: heroImage,
    alt: "Professional shooting range",
    category: "Training"
  },
  {
    id: 2,
    src: studentImage,
    alt: "Student achievement",
    category: "Awards"
  },
  {
    id: 3,
    src: prakashImage,
    alt: "Prakash Nanjappa coaching",
    category: "Events"
  },
  {
    id: 4,
    src: heroImage,
    alt: "Competition training",
    category: "Training"
  },
  {
    id: 5,
    src: studentImage,
    alt: "Student practice",
    category: "Training"
  },
  {
    id: 6,
    src: prakashImage,
    alt: "Expert coaching session",
    category: "Events"
  }
];

// Duplicate images for seamless loop
const duplicatedImages = [...galleryImages, ...galleryImages];

export default function GalleryPreviewSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our training facilities, events, and achievements through our gallery
          </p>
        </div>

        {/* Moving Ribbon */}
        <div className="relative mb-12">
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-6">
              {duplicatedImages.map((image, index) => (
                <div 
                  key={`${image.id}-${index}`} 
                  className="flex-shrink-0 w-80 h-64 relative group cursor-pointer"
                  onClick={() => window.location.href = '/gallery'}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-pnsa-orange text-white px-3 py-1 text-sm font-medium rounded-full shadow-lg">
                      {image.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-pnsa-orange/30 rounded-xl transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient Overlays for Fade Effect */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>

        {/* View Full Gallery Button */}
        <div className="text-center">
          <Button asChild variant="default" size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link to="/gallery" className="inline-flex items-center">
              <Eye className="h-4 w-4 mr-2" />
              View Full Gallery
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}