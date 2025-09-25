import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Clock, Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get In Touch With Us
            </h2>
            <p className="text-gray-600 mb-8 font-inter">
              If You Have Any Feedback Or Questions About Our Clubs, Our Website 
              Or Our Services In General, Please Contact Us By Filling Out The Form.
            </p>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Open Hours</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-pnsa-orange" />
                  <span className="text-gray-700 font-inter">
                    <strong>Mon - Fri :</strong> 08:00 AM To 09:00 PM
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-pnsa-orange" />
                  <span className="text-gray-700">
                    <strong>Sat :</strong> 09:00 AM To 06:00 PM
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-pnsa-orange" />
                  <span className="text-gray-700">
                    <strong>Sunday :</strong> 09:00 AM To 02:00 PM
                  </span>
                </div>
              </div>

              <div className="pt-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-pnsa-green" />
                  <span className="text-gray-700">
                    Esteem Mall #127 & 128, 4th floor, Bellary Rd, Hebbal, Bangalore, Karnataka 560024, IN
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-pnsa-green" />
                  <span className="text-gray-700">+91 7362528236</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-pnsa-green" />
                  <span className="text-gray-700">pnsa10.9@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-pnsa-dark p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            <p className="text-white/80 text-sm mb-6 font-inter">
              Your email address will not be published *
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="your full name"
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              
              <Input
                type="email"
                placeholder="e-mail address"
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              
              <Input
                placeholder="subject"
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              
              <Textarea
                placeholder="message"
                rows={4}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              
              <Button 
                type="submit" 
                variant="orange" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Now"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}