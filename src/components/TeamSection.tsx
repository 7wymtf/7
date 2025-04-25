
import { motion } from "framer-motion";
import { UserRound, Book, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const TeamSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white mb-4"
          >
            Meet Our Research Team
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto"
          >
            Our team consists of dedicated security researchers and hardware engineers with extensive experience in penetration testing and vulnerability assessment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 border border-white/10 rounded-lg"
          >
            <UserRound className="w-8 h-8 text-white mb-4" />
            <h3 className="text-white text-lg font-semibold mb-2">Research & Development</h3>
            <p className="text-white/70 text-sm">Leading innovation in hardware security tools and penetration testing equipment.</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 border border-white/10 rounded-lg"
          >
            <Book className="w-8 h-8 text-white mb-4" />
            <h3 className="text-white text-lg font-semibold mb-2">Documentation</h3>
            <p className="text-white/70 text-sm">Comprehensive guides and technical documentation for all our hardware tools.</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-6 border border-white/10 rounded-lg"
          >
            <ExternalLink className="w-8 h-8 text-white mb-4" />
            <h3 className="text-white text-lg font-semibold mb-2">Support</h3>
            <p className="text-white/70 text-sm">24/7 technical support and continuous firmware updates for our products.</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors"
            onClick={() => window.location.href = '#about'}
          >
            Learn More About Our Team
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamSection;
