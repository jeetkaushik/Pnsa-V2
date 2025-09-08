import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import pnsaLogo from "@/assets/pnsa-logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Centres", href: "/centres" },
  { name: "Gallery", href: "/gallery" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="flex items-center space-x-3">
            <img className="h-12 w-auto" src={pnsaLogo} alt="PNSA" />
            <div className="font-bold text-pnsa-dark text-lg">PNSA</div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold leading-6 transition-colors hover:text-pnsa-orange ${
                isActive(item.href) 
                  ? "text-pnsa-orange border-b-2 border-pnsa-orange pb-1" 
                  : "text-gray-900"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild variant="orange" size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3">
                <img className="h-8 w-auto" src={pnsaLogo} alt="PNSA" />
                <div className="font-bold text-pnsa-dark">PNSA</div>
              </Link>
              <Button
                variant="ghost"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 ${
                        isActive(item.href) ? "text-pnsa-orange" : "text-gray-900"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Button asChild variant="orange" size="lg" className="w-full">
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}