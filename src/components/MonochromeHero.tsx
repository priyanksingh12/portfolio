import { motion } from "framer-motion";

export const MonochromeHero = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-10">
      {/* Container matching widescreen editorial canvas */}
      <div className="relative w-full h-full max-w-[1720px] mx-auto">

        {/* 1. Background Orbit Arcs (Left side) */}
        <svg
          className="absolute top-0 left-0 w-[42vw] max-w-[620px] h-[95vh] pointer-events-none opacity-30 hidden md:block"
          viewBox="0 0 620 950"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Dashed outer orbit arc passing through globe */}
          <path
            d="M -180 80 C 380 220, 480 620, -40 880"
            stroke="white"
            strokeWidth="1.2"
            strokeDasharray="5 7"
          />
          {/* Inner solid orbit arc */}
          <path
            d="M -220 20 C 320 180, 410 540, -80 780"
            stroke="white"
            strokeWidth="0.8"
            opacity="0.7"
          />
        </svg>

        {/* 2. Wireframe 3D Globe (Upper Left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: -15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[21%] sm:top-[22%] md:top-[23%] lg:top-[24%] left-[2.5%] sm:left-[3.5%] md:left-[4%] lg:left-[5%] xl:left-[6%] pointer-events-none z-10"
          aria-hidden="true"
        >
          <motion.div
            animate={{
              y: [-5, 5, -5],
              rotate: [-1.5, 1.5, -1.5],
            }}
            transition={{
              duration: 8.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <img
              src="/hero/wireframe-globe.png"
              alt=""
              className="w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64 h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.06)]"
              style={{ mixBlendMode: "screen" }}
            />
            {/* Star sparkle touching the right edge of the globe */}
            <motion.div
              className="absolute -right-2 top-[32%] text-white"
              animate={{
                scale: [0.9, 1.25, 0.9],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 3. Tech Checklist Sticky Note (Lower Left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[9%] sm:bottom-[10%] md:bottom-[10%] lg:bottom-[11%] left-[2.5%] sm:left-[3.5%] md:left-[4%] lg:left-[5%] xl:left-[6.5%] pointer-events-none z-10"
          aria-hidden="true"
        >
          <motion.div
            animate={{
              y: [4, -4, 4],
              rotate: [-6.5, -4.5, -6.5],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="relative"
          >
            <img
              src="/hero/tech-checklist.png"
              alt=""
              className="w-28 sm:w-36 md:w-48 lg:w-56 xl:w-64 h-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.08)]"
              style={{ mixBlendMode: "screen" }}
            />
          </motion.div>
        </motion.div>

        {/* 4. Left 4-Point Star Sparkle (Left of checklist) */}
        <motion.div
          className="absolute bottom-[34%] left-[2%] md:left-[3%] pointer-events-none z-10 hidden sm:block text-white"
          animate={{
            scale: [0.9, 1.25, 0.9],
            opacity: [0.4, 0.95, 0.4],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.0,
          }}
          aria-hidden="true"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
          </svg>
        </motion.div>

        {/* 5. Background Technical Grid (Behind and around laptop) */}
        <div
          className="absolute top-[34%] md:top-[36%] left-[63%] md:left-[65%] lg:left-[66%] xl:left-[68%] w-[220px] md:w-[280px] lg:w-[340px] xl:w-[380px] h-[280px] md:h-[340px] lg:h-[380px] pointer-events-none opacity-30 hidden md:block"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.22) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse 65% 65% at 50% 50%, black 25%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 65% 65% at 50% 50%, black 25%, transparent 80%)",
          }}
          aria-hidden="true"
        />

        {/* 6. Code Laptop (Right side of Priyank's chest) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[52%] md:top-[53%] lg:top-[54%] left-[69%] md:left-[70%] lg:left-[71%] xl:left-[72%] -translate-y-1/2 pointer-events-none z-10 hidden sm:block"
          aria-hidden="true"
        >
          <motion.div
            animate={{
              y: [-6, 6, -6],
              rotate: [0.5, -1, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          >
            <img
              src="/hero/code-laptop.png"
              alt=""
              className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              style={{ mixBlendMode: "screen" }}
            />
          </motion.div>
        </motion.div>

        {/* 7. Star Sparkles (Right cluster) */}
        <motion.div
          className="absolute top-[35%] left-[70%] md:left-[71%] pointer-events-none z-10 hidden sm:block text-white"
          animate={{
            scale: [0.85, 1.2, 0.85],
            opacity: [0.35, 0.9, 0.35],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
          aria-hidden="true"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-[31%] left-[75%] md:left-[76%] pointer-events-none z-10 hidden md:block text-white"
          animate={{
            scale: [0.9, 1.25, 0.9],
            opacity: [0.35, 0.85, 0.35],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.4,
          }}
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
          </svg>
        </motion.div>

        <div className="absolute top-[59%] left-[68%] text-white/50 text-xs font-mono pointer-events-none hidden md:block" aria-hidden="true">
          +
        </div>
        <div className="absolute top-[28%] left-[76%] text-white/40 text-xs font-mono pointer-events-none hidden md:block" aria-hidden="true">
          +
        </div>

      </div>

      {/* 8. Central Portrait of Priyank (Horizontally Dead Center) */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center items-end pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center items-end"
        >
          <motion.img
            src="/hero/priyank-hero-portrait-centered.png"
            alt="Priyank Singh monochrome doodle portrait"
            className="h-[80vh] sm:h-[84vh] md:h-[88vh] lg:h-[92vh] xl:h-[95vh] w-auto max-w-[94vw] sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[62vw] xl:max-w-[55vw] object-contain object-bottom pointer-events-none"
            style={{
              mixBlendMode: "screen",
              filter: "contrast(1.05) brightness(1.02)",
            }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MonochromeHero;
