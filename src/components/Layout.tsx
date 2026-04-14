import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, Home, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Results", path: "/results" },
    { name: "About MSA", path: "/about" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "bg-msa-blue text-white shadow-lg py-4"
            : "bg-transparent text-white py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className="w-10 h-10 bg-msa-gold rounded flex items-center justify-center text-msa-blue font-serif font-bold text-xl">
              M
            </div>
            <span className="font-serif font-bold text-2xl tracking-wider">MSA</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium tracking-wide hover:text-msa-gold transition-colors uppercase"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/sell"
              className="bg-msa-gold text-msa-blue px-6 py-2.5 rounded font-semibold hover:bg-white transition-colors uppercase tracking-wide text-sm"
            >
              Get Valuation
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-msa-blue shadow-xl border-t border-msa-blue-light md:hidden"
            >
              <div className="flex flex-col px-4 py-6 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-white text-lg font-medium py-2 border-b border-msa-blue-light hover:text-msa-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/sell"
                  className="mt-4 bg-msa-gold text-msa-blue text-center px-6 py-3 rounded font-bold uppercase tracking-wide"
                >
                  Get Instant Valuation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-msa-blue text-white py-16 border-t-4 border-msa-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-msa-gold rounded flex items-center justify-center text-msa-blue font-serif font-bold text-xl">
                M
              </div>
              <span className="font-serif font-bold text-2xl tracking-wider">MSA</span>
            </div>
            <p className="text-gray-300 max-w-md text-lg font-serif italic">
              "We Don't Just List Homes. We Sell Homes Faster for More."
            </p>
            <p className="mt-4 text-sm text-gray-400">
              The premier marketing engine for motivated home sellers.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wider text-msa-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/sell" className="text-gray-300 hover:text-white transition-colors">Sell My Home</Link></li>
              <li><Link to="/results" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wider text-msa-gold">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li>hello@msarealestate.com</li>
              <li>1-800-MSA-SELL</li>
              <li>Sydney, Australia</li>
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-6 text-msa-gold hover:text-white transition-colors font-medium">
              Book Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-msa-blue-light text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MSA Real Estate. All rights reserved.
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 z-40">
        <Link
          to="/sell"
          className="block w-full bg-msa-blue text-white text-center py-4 rounded-lg font-bold uppercase tracking-wide shadow-xl shadow-msa-blue/20"
        >
          Get Home Valuation
        </Link>
      </div>
    </div>
  );
}
