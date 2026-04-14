import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-msa-blue mb-4">
              Book Your <span className="text-msa-gold italic">Consultation.</span>
            </h1>
            <p className="text-lg text-gray-600">
              Select a time below to schedule a confidential discussion about your property's potential.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
        >
          {/* Placeholder for Calendly Embed */}
          <div className="aspect-[4/3] md:aspect-[16/9] w-full bg-gray-50 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 bg-msa-blue/10 text-msa-blue rounded-full flex items-center justify-center mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-msa-blue mb-2">Calendar Integration</h3>
            <p className="text-gray-500 max-w-md">
              In a production environment, this space would contain an embedded Calendly widget allowing users to book directly into your calendar.
            </p>
            <div className="mt-8 p-4 bg-msa-gold/10 border border-msa-gold/30 rounded text-msa-blue font-medium text-sm">
              Example: &lt;iframe src="https://calendly.com/msa-real-estate" ... &gt;&lt;/iframe&gt;
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
