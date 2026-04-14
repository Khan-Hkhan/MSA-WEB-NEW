import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, TrendingUp, Clock, ShieldCheck, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
            alt="Luxury Home"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-msa-blue/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-msa-blue via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-msa-gold/20 text-msa-gold border border-msa-gold/30 text-sm font-bold tracking-widest uppercase mb-6">
              Exclusive Marketing Engine
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Sell Your Home Faster & <br className="hidden md:block" />
              <span className="text-msa-gold italic">For Higher Value.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light">
              Stop wasting weeks with passive marketing. We don't just list homes—we actively sell them using targeted, premium exposure.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/sell"
                className="w-full sm:w-auto bg-msa-gold text-msa-blue px-8 py-4 rounded font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 text-lg"
              >
                Get Instant Valuation <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals / As Seen In */}
      <section className="bg-msa-blue py-12 border-b border-msa-blue-light relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-msa-blue-light">
            <div className="p-4">
              <div className="text-4xl font-serif font-bold text-msa-gold mb-2">14 Days</div>
              <div className="text-gray-300 uppercase tracking-wide text-sm font-medium">Average Time on Market</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-serif font-bold text-msa-gold mb-2">+12%</div>
              <div className="text-gray-300 uppercase tracking-wide text-sm font-medium">Sold Over Asking Price</div>
            </div>
            <div className="p-4">
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-msa-gold fill-msa-gold" size={32} />
                ))}
              </div>
              <div className="text-gray-300 uppercase tracking-wide text-sm font-medium">5-Star Seller Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* The MSA Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-msa-blue mb-4">The MSA Advantage</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Traditional agents put a sign in the yard and wait. We deploy a proactive, multi-channel marketing engine to find the perfect buyer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200 z-0" />

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-msa-blue text-msa-gold flex items-center justify-center mb-6 shadow-xl border-4 border-white">
                <TrendingUp size={40} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-msa-blue mb-3">1. Strategic Valuation</h3>
              <p className="text-gray-600">
                We analyze hyper-local data to price your home for maximum profit, not just a quick sale.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-msa-blue text-msa-gold flex items-center justify-center mb-6 shadow-xl border-4 border-white">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-msa-blue mb-3">2. Premium Marketing</h3>
              <p className="text-gray-600">
                Professional staging advice, cinematic video tours, and targeted digital campaigns across Sydney.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-msa-blue text-msa-gold flex items-center justify-center mb-6 shadow-xl border-4 border-white">
                <Clock size={40} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-msa-blue mb-3">3. Fast, High-Value Sale</h3>
              <p className="text-gray-600">
                We leverage multiple offers to drive up the price and close on your timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories (Video Placeholders) */}
      <section className="py-24 bg-[#f5f2ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-msa-blue mb-4">Client Success Stories</h2>
              <p className="text-lg text-gray-600">Real results from motivated sellers in Sydney.</p>
            </div>
            <Link to="/results" className="hidden md:flex items-center gap-2 text-msa-blue font-bold hover:text-msa-gold transition-colors uppercase tracking-wide text-sm mt-4 md:mt-0">
              View All Case Studies <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Story 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <div className="relative aspect-video bg-gray-900">
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="Property" 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-msa-gold/90 text-msa-blue flex items-center justify-center pl-1 backdrop-blur-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-msa-blue text-white px-3 py-1 text-sm font-bold rounded">
                  Sold $150k Over Asking
                </div>
              </div>
              <div className="p-6">
                <p className="font-serif italic text-lg text-gray-700 mb-4">
                  "MSA's marketing strategy brought in 40 groups on the first weekend. We sold before auction for a price we didn't think was possible."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Client" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="font-bold text-msa-blue">David & Sarah</div>
                    <div className="text-sm text-gray-500">Mosman, Sydney</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <div className="relative aspect-video bg-gray-900">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1153&q=80" 
                  alt="Property" 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-msa-gold/90 text-msa-blue flex items-center justify-center pl-1 backdrop-blur-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-msa-blue text-white px-3 py-1 text-sm font-bold rounded">
                  Sold in 8 Days
                </div>
              </div>
              <div className="p-6">
                <p className="font-serif italic text-lg text-gray-700 mb-4">
                  "We tried selling with a local agent for 3 months with no luck. MSA took over, rebranded the listing, and sold it in 8 days."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Client" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="font-bold text-msa-blue">Elena M.</div>
                    <div className="text-sm text-gray-500">Bondi, Sydney</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/results" className="inline-flex items-center gap-2 text-msa-blue font-bold hover:text-msa-gold transition-colors uppercase tracking-wide text-sm">
              View All Case Studies <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-24 bg-msa-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">MSA Premium Listings Sydney</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-12">
            We specialize in selling premium properties across Sydney's most sought-after suburbs. Our hyper-local marketing strategies ensure your home is seen by the right buyers, locally and internationally.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Eastern Suburbs', 'North Shore', 'Inner West', 'Northern Beaches', 'Sutherland Shire', 'Sydney CBD'].map((area) => (
              <span key={area} className="px-4 py-2 border border-msa-blue-light rounded-full text-sm text-gray-300 hover:border-msa-gold hover:text-msa-gold transition-colors cursor-default">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
