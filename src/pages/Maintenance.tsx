import { motion } from "framer-motion";
import { Construction, Anchor, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

const Maintenance = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-[#001219]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/images/maintenance-bg.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#001219]/80 via-[#001219]/60 to-[#001219]/90 backdrop-blur-[2px]" />
      </div>

      {/* Animated Floating Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] opacity-10 pointer-events-none hidden md:block"
      >
        <Anchor size={120} className="text-white" />
      </motion.div>

      <motion.div 
        animate={{ 
          x: [-20, 20, -20],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[15%] opacity-10 pointer-events-none hidden md:block"
      >
        <Waves size={100} className="text-white" />
      </motion.div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-lg"
      >
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] text-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
              <Construction className="w-12 h-12 text-blue-400" />
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Charting New <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Depths</span>
          </h1>
          
          <p className="text-blue-50/70 text-lg mb-10 leading-relaxed font-light">
            We are currently refining our underwater experience. Dive Red Sea Immerse is undergoing a makeover to serve you better. We'll be back on the surface shortly!
          </p>

          <div className="space-y-6">
            <Button 
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-full h-14 text-lg font-medium shadow-xl shadow-blue-900/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => window.location.reload()}
            >
              Check Readiness
            </Button>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-1 bg-blue-500/20 rounded-full overflow-hidden">
                <motion.div 
                   animate={{ x: [-48, 48] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                   className="w-full h-full bg-blue-400"
                />
              </div>
              <p className="text-white/30 text-xs tracking-widest uppercase font-medium">
                Diving in Progress
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
};

export default Maintenance;
