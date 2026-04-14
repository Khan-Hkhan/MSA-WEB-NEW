import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Home as HomeIcon, ArrowRight, CheckCircle2 } from "lucide-react";

type FormData = {
  address: string;
  phone: string;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  timeline: string;
  email: string;
  firstName: string;
  lastName: string;
};

export default function Sell() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, trigger } = useForm<FormData>();

  const nextStep = async () => {
    const fieldsToValidate = step === 1 
      ? ['address', 'phone'] as const 
      : [];
      
    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setStep(2);
      window.scrollTo(0, 0);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call to CRM/GA4
    console.log("Form Data Submitted:", data);
    
    // Simulate GA4 Event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        currency: 'AUD',
        value: 1,
        event_category: 'engagement',
        event_label: 'home_valuation_form'
      });
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Copy & Trust */}
          <div className="pt-8 lg:sticky lg:top-32">
            <span className="inline-block py-1 px-3 rounded-full bg-msa-gold/20 text-msa-gold border border-msa-gold/30 text-sm font-bold tracking-widest uppercase mb-6">
              Free Home Valuation
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-msa-blue mb-6 leading-tight">
              Discover Your Home's <br />
              <span className="text-msa-gold italic">True Market Potential.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Automated estimates are often wrong by up to 20%. Get a precise, data-driven valuation from Sydney's premium marketing experts.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-msa-blue/5 flex items-center justify-center flex-shrink-0 text-msa-blue">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-msa-blue text-lg">Data-Driven Accuracy</h3>
                  <p className="text-gray-600">We analyze recent off-market sales and current buyer demand in your specific street.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-msa-blue/5 flex items-center justify-center flex-shrink-0 text-msa-blue">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-msa-blue text-lg">No Obligations</h3>
                  <p className="text-gray-600">Receive your comprehensive report with zero pressure to list.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-msa-blue/5 flex items-center justify-center flex-shrink-0 text-msa-blue">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-msa-blue text-lg">Strategic Advice</h3>
                  <p className="text-gray-600">Learn exactly what minor improvements could add $50k+ to your final sale price.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 border border-gray-100 relative overflow-hidden">
            {/* Progress Bar */}
            {!isSuccess && (
              <div className="absolute top-0 left-0 w-full h-2 bg-gray-100">
                <div 
                  className="h-full bg-msa-gold transition-all duration-500 ease-out"
                  style={{ width: step === 1 ? '50%' : '100%' }}
                />
              </div>
            )}

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-msa-blue mb-4">Request Received</h2>
                  <p className="text-gray-600 mb-8">
                    Thank you. Our valuation team is analyzing your property data. We will contact you shortly with your comprehensive report.
                  </p>
                  <button 
                    onClick={() => {
                      setStep(1);
                      setIsSuccess(false);
                    }}
                    className="text-msa-blue font-bold uppercase tracking-wide text-sm hover:text-msa-gold transition-colors"
                  >
                    Submit Another Property
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key={`step-${step}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 pt-4"
                >
                  {step === 1 && (
                    <>
                      <div className="mb-8">
                        <h2 className="text-2xl font-serif font-bold text-msa-blue mb-2">Where is your property?</h2>
                        <p className="text-gray-500 text-sm">Step 1 of 2: Basic Information</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-bold text-msa-blue mb-2 uppercase tracking-wide">Property Address</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                              <MapPin size={20} />
                            </div>
                            <input
                              {...register("address", { required: "Address is required" })}
                              className={`w-full pl-10 pr-4 py-4 bg-gray-50 border ${errors.address ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-msa-gold focus:border-transparent transition-all`}
                              placeholder="e.g., 123 Smith Street, Sydney NSW 2000"
                            />
                          </div>
                          {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-msa-blue mb-2 uppercase tracking-wide">Phone Number</label>
                          <input
                            {...register("phone", { 
                              required: "Phone number is required",
                              pattern: {
                                value: /^[0-9\s\-\+\(\)]+$/,
                                message: "Invalid phone number format"
                              }
                            })}
                            className={`w-full px-4 py-4 bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-msa-gold focus:border-transparent transition-all`}
                            placeholder="Best number to reach you"
                          />
                          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={nextStep}
                        className="w-full bg-msa-blue text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-msa-blue-light transition-colors flex items-center justify-center gap-2 mt-8"
                      >
                        Continue <ArrowRight size={20} />
                      </button>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <div className="mb-8">
                        <h2 className="text-2xl font-serif font-bold text-msa-blue mb-2">Property Details</h2>
                        <p className="text-gray-500 text-sm">Step 2 of 2: Tell us more about the home</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-msa-blue mb-2 uppercase tracking-wide">First Name</label>
                          <input
                            {...register("firstName", { required: "Required" })}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-msa-gold"
                          />
                          {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-msa-blue mb-2 uppercase tracking-wide">Last Name</label>
                          <input
                            {...register("lastName", { required: "Required" })}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-msa-gold"
                          />
                          {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-msa-blue mb-2 uppercase tracking-wide">Email Address</label>
                        <input
                          type="email"
                          {...register("email", { 
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address"
                            }
                          })}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-msa-gold"
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-msa-blue mb-2 uppercase tracking-wide">Bedrooms</label>
                          <select
                            {...register("bedrooms")}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-msa-gold"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5+">5+</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-msa-blue mb-2 uppercase tracking-wide">Bathrooms</label>
                          <select
                            {...register("bathrooms")}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-msa-gold"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4+">4+</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-msa-blue mb-2 uppercase tracking-wide">Selling Timeline</label>
                        <select
                          {...register("timeline")}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-msa-gold"
                        >
                          <option value="ASAP">ASAP (1-30 Days)</option>
                          <option value="1-3 Months">1-3 Months</option>
                          <option value="3-6 Months">3-6 Months</option>
                          <option value="Just Curious">Just Curious</option>
                        </select>
                      </div>

                      <div className="flex gap-4 mt-8">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="px-6 py-4 border border-gray-200 rounded-lg font-bold text-gray-600 hover:bg-gray-50 transition-colors"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-msa-gold text-msa-blue py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-[#c4a02e] transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                        >
                          {isSubmitting ? "Processing..." : "Get My Valuation"}
                        </button>
                      </div>
                    </>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
