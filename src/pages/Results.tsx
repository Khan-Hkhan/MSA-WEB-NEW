import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    title: "The Mosman Transformation",
    location: "Mosman, Sydney",
    beforePrice: "$3.2M (Previous Agent Estimate)",
    soldPrice: "$3.85M",
    daysOnMarket: 12,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    quote: "MSA's staging and digital campaign brought in international buyers we never would have reached otherwise.",
    client: "David & Sarah"
  },
  {
    id: 2,
    title: "Record-Breaking Bondi Apartment",
    location: "Bondi Beach, Sydney",
    beforePrice: "$1.8M (Market Average)",
    soldPrice: "$2.15M",
    daysOnMarket: 8,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1153&q=80",
    quote: "They didn't just list it; they created an event. The open house had a line down the street.",
    client: "Elena M."
  },
  {
    id: 3,
    title: "The Stalled Listing Revived",
    location: "Paddington, Sydney",
    beforePrice: "Unsold for 90 days",
    soldPrice: "$4.2M",
    daysOnMarket: 14,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    quote: "We were ready to give up. MSA rebranded the property, changed the narrative, and got us a premium price.",
    client: "James T."
  }
];

export default function Results() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-24 pb-24">
      {/* Header */}
      <div className="bg-msa-blue text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Proven <span className="text-msa-gold italic">Results.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              We don't deal in promises. We deal in data, strategy, and record-breaking sales. See how we've transformed outcomes for Sydney sellers.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-msa-gold translate-x-4 translate-y-4 rounded-xl -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-msa-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-block px-3 py-1 bg-gray-200 text-msa-blue text-xs font-bold uppercase tracking-widest rounded">
                  {study.location}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-msa-blue">{study.title}</h2>
                
                <div className="grid grid-cols-2 gap-6 py-6 border-y border-gray-200">
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide font-bold mb-1">Sold Price</div>
                    <div className="text-3xl font-serif font-bold text-msa-gold">{study.soldPrice}</div>
                    <div className="text-sm text-gray-500 mt-1">vs {study.beforePrice}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide font-bold mb-1">Time on Market</div>
                    <div className="text-3xl font-serif font-bold text-msa-blue">{study.daysOnMarket} <span className="text-lg">Days</span></div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-msa-gold pl-6 py-2">
                  <p className="font-serif italic text-xl text-gray-700 mb-4">"{study.quote}"</p>
                  <footer className="font-bold text-msa-blue">— {study.client}</footer>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 text-center bg-msa-blue rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-msa-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to be our next success story?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Find out what your home is truly worth when marketed correctly.
            </p>
            <Link
              to="/sell"
              className="inline-flex items-center gap-2 bg-msa-gold text-msa-blue px-8 py-4 rounded font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              Get Instant Valuation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
