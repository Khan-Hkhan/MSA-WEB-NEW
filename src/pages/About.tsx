import { motion } from "motion/react";
import { Target, TrendingUp, Users, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-24 pb-24">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-msa-blue mb-6 leading-tight">
              We are Marketers <br />
              <span className="text-msa-gold italic">First.</span> Real Estate Agents Second.
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              The traditional real estate model is broken. Most agents rely on passive strategies—putting a sign in the yard, listing on a portal, and hoping for the best.
            </p>
            <p className="text-lg text-gray-600">
              MSA was founded on a different principle: <strong className="text-msa-blue">Proactive, targeted marketing drives higher prices.</strong> We treat your property like a product launch, utilizing advanced digital targeting, cinematic production, and aggressive negotiation to maximize your return.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-msa-blue translate-x-4 translate-y-4 rounded-xl -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80" 
              alt="MSA Team" 
              className="rounded-xl w-full h-auto object-cover shadow-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>

      {/* Core Pillars */}
      <div className="bg-msa-blue text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">The MSA Difference</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Why Sydney's smartest sellers choose us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target size={32} />,
                title: "Hyper-Targeting",
                desc: "We don't just wait for buyers to search. We use data to put your home in front of passive buyers who aren't even looking yet."
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Price Maximization",
                desc: "Our goal isn't just to sell your home; it's to break street records. We create competitive tension to drive prices up."
              },
              {
                icon: <Users size={32} />,
                title: "Exclusive Network",
                desc: "Access to an off-market database of high-net-worth individuals, expats, and international investors."
              },
              {
                icon: <Award size={32} />,
                title: "Cinematic Presentation",
                desc: "Magazine-quality photography, drone footage, and lifestyle videos that make buyers fall in love before they step inside."
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-msa-blue-light p-8 rounded-xl border border-gray-800 hover:border-msa-gold transition-colors">
                <div className="text-msa-gold mb-6">{pillar.icon}</div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
