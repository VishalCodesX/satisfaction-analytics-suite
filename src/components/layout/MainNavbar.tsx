
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  FileText,
  PieChart,
  Menu,
  X,
} from "lucide-react";

const MainNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-marine-blue text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/home" className="flex-shrink-0 flex items-center">
              <PieChart className="h-8 w-8 text-sky-blue" />
              <span className="ml-2 text-lg font-medium">InsightAnalytics</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/home" className="py-2 px-3 rounded-md hover:bg-steel-blue transition-colors">
                Home
              </Link>
              <Link to="/dashboard" className="py-2 px-3 rounded-md hover:bg-steel-blue transition-colors">
                Dashboard
              </Link>
              <Link to="/upload" className="py-2 px-3 rounded-md hover:bg-steel-blue transition-colors">
                Upload Data
              </Link>
              <Link to="/about" className="py-2 px-3 rounded-md hover:bg-steel-blue transition-colors">
                About
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <Button
              className="bg-sky-blue text-marine-blue hover:bg-cream hover:text-marine-blue"
              onClick={() => navigate("/dashboard")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-sky-blue hover:text-white hover:bg-steel-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-marine-blue border-t border-steel-blue">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/home"
              className="block py-2 px-3 rounded-md hover:bg-steel-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="block py-2 px-3 rounded-md hover:bg-steel-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/upload"
              className="block py-2 px-3 rounded-md hover:bg-steel-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Upload Data
            </Link>
            <Link
              to="/about"
              className="block py-2 px-3 rounded-md hover:bg-steel-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
          <div className="px-2 py-3 border-t border-steel-blue">
            <Button 
              className="bg-sky-blue text-marine-blue hover:bg-cream hover:text-marine-blue w-full"
              onClick={() => {
                navigate("/dashboard");
                setMobileMenuOpen(false);
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
