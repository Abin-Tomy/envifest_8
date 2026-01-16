import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Shield, AlertTriangle } from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventName: string;
}

interface FormData {
  name: string;
  college: string;
  year: string;
  phone: string;
  email: string;
}

const RegistrationModal = ({ isOpen, onClose, eventName }: RegistrationModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    college: "",
    year: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call - replace with actual Django backend endpoint
    // const response = await fetch('/api/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ ...formData, event: eventName }),
    // });

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", college: "", year: "", phone: "", email: "" });
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-doom-void/90 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg border border-primary/30 bg-card/95 backdrop-blur-md overflow-hidden"
          >
            {/* Scanlines overlay */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)] pointer-events-none z-20" />

            {/* Header */}
            <div className="relative bg-doom-gunmetal/50 px-6 py-4 border-b border-primary/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <div>
                    <span className="font-mono text-[10px] tracking-widest text-doom-silver/50 block">
                      SECURITY CLEARANCE REQUIRED
                    </span>
                    <span className="font-orbitron text-sm text-primary tracking-wider">
                      {eventName}
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-doom-gunmetal/50 transition-colors"
                >
                  <X className="w-5 h-5 text-doom-silver/50 hover:text-doom-red" />
                </button>
              </div>
            </div>

            {/* Status bar */}
            <div className="bg-doom-void/50 px-6 py-2 border-b border-primary/10 flex items-center gap-2">
              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2 h-2 bg-primary rounded-full"
              />
              <span className="font-mono text-[10px] tracking-widest text-doom-silver/40">
                AWAITING CREDENTIALS INPUT...
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15 }}
                    className="w-20 h-20 mx-auto mb-6 border-2 border-primary bg-primary/20 rounded-full flex items-center justify-center"
                  >
                    <Shield className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h3 className="font-orbitron text-xl text-primary mb-2">ACCESS GRANTED</h3>
                  <p className="font-mono text-sm text-doom-silver/60">
                    Registration confirmed. See you at the event.
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="font-mono text-xs tracking-widest text-doom-silver/60 uppercase">
                      Agent Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-doom-void/50 border border-doom-silver/20 font-rajdhani text-foreground placeholder:text-doom-silver/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* College */}
                  <div className="space-y-1">
                    <label className="font-mono text-xs tracking-widest text-doom-silver/60 uppercase">
                      Affiliation (College)
                    </label>
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-doom-void/50 border border-doom-silver/20 font-rajdhani text-foreground placeholder:text-doom-silver/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="College/Institution name"
                    />
                  </div>

                  {/* Year */}
                  <div className="space-y-1">
                    <label className="font-mono text-xs tracking-widest text-doom-silver/60 uppercase">
                      Year of Study
                    </label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-doom-void/50 border border-doom-silver/20 font-rajdhani text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                      <option value="pg">Post Graduate</option>
                    </select>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="font-mono text-xs tracking-widest text-doom-silver/60 uppercase">
                      Contact Frequency (Phone)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 bg-doom-void/50 border border-doom-silver/20 font-rajdhani text-foreground placeholder:text-doom-silver/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="10-digit phone number"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="font-mono text-xs tracking-widest text-doom-silver/60 uppercase">
                      Transmission Channel (Email)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-doom-void/50 border border-doom-silver/20 font-rajdhani text-foreground placeholder:text-doom-silver/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Warning */}
                  <div className="flex items-start gap-3 px-4 py-3 bg-doom-orange/10 border border-doom-orange/30">
                    <AlertTriangle className="w-5 h-5 text-doom-orange flex-shrink-0 mt-0.5" />
                    <p className="font-mono text-xs text-doom-orange/80">
                      All information is encrypted and stored securely. By registering, you agree to participate in ENVI 8.
                    </p>
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-primary text-primary-foreground font-orbitron tracking-widest text-sm relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                        />
                        PROCESSING...
                      </span>
                    ) : (
                      "SUBMIT CLEARANCE REQUEST"
                    )}
                  </motion.button>
                </>
              )}
            </form>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegistrationModal;