import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Remove TypeScript interfaces and types
const Tooltip = ({
  children,
  text,
  position = "top",
  theme = "modern",
  delay = 0.1,
  arrow = true,
  maxWidth = "250px",
  className = "",
  animation = "smooth",
  duration = 0.3,
  distance = 8,
  showOnClick = false,
  persistent = false,
  fontSize = "sm",
  rich = false,
}) => {
  const [visible, setVisible] = useState(false);
  const tooltipRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        persistent &&
        tooltipRef.current &&
        triggerRef.current &&
        !tooltipRef.current.contains(event.target) &&
        !triggerRef.current.contains(event.target)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [persistent]);

  const getAnimationVariants = () => {
    const baseOpacity = { opacity: 0 };
    const animations = {
      smooth: {
        hidden: {
          ...baseOpacity,
          ...(position === "top" && { y: distance, x: "-50%" }),
          ...(position === "bottom" && { y: -distance, x: "-50%" }),
          ...(position === "left" && { x: distance, y: "-50%" }),
          ...(position === "right" && { x: -distance, y: "-50%" }),
        },
        visible: {
          opacity: 1,
          y: position === "top" || position === "bottom" ? 0 : "-50%",
          x: position === "left" || position === "right" ? 0 : "-50%",
          transition: {
            type: "spring",
            damping: 25,
            stiffness: 300,
          },
        },
      },
      // other animations...
    };
    return animations[animation];
  };

  const getThemeClasses = () => {
    const themes = {
      modern: `
        bg-slate-800/95 text-white 
        shadow-lg shadow-slate-900/20 
        backdrop-blur-sm border border-slate-700/50 
        ring-1 ring-white/10
        dark:bg-slate-900/95 dark:border-slate-600/50
      `,
      elegant: `
        bg-white/95 text-slate-900
        shadow-xl border border-slate-200/50 
        backdrop-blur-sm ring-1 ring-black/5
        dark:bg-slate-800/95 dark:text-white dark:border-slate-700/50
      `,
      frost: `
        bg-white/20 backdrop-blur-md text-white 
        shadow-xl border border-white/30 
        ring-1 ring-white/20 
        from-white/10 to-transparent bg-gradient-to-b
      `,
      neon: `
        bg-black/90 text-white 
        shadow-xl border border-purple-500/50 
        shadow-purple-500/20 backdrop-blur-sm 
        ring-1 ring-purple-500/50
        from-purple-500/10 to-transparent bg-gradient-to-b
      `,
      soft: `
        bg-slate-50/95 text-slate-700 
        shadow-lg border border-slate-200/50 
        backdrop-blur-sm ring-1 ring-slate-200/50
        dark:bg-slate-700/95 dark:text-slate-100
      `,
      glass: `
        bg-white/15 backdrop-blur-lg 
        border border-white/20 text-white 
        shadow-xl ring-1 ring-white/20 
        from-white/10 to-white/5 bg-gradient-to-b
      `,
    };
    return themes[theme];
  };

  const getFontSizeClass = () => {
    const sizes = {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
    };
    return sizes[fontSize];
  };

  const getPositionClasses = () => {
    const positions = {
      top: "bottom-full left-1/2 mb-2",
      bottom: "top-full left-1/2 mt-2",
      left: "right-full top-1/2 mr-2",
      right: "left-full top-1/2 ml-2",
    };
    return positions[position];
  };

  const getArrowClasses = () => {
    if (!arrow) return "";

    const baseClasses = "after:content-[''] after:absolute ";
    const positions = {
      top: "after:top-full after:left-1/2 after:-translate-x-1/2 after:border-[6px] after:border-t-current after:border-x-transparent after:border-b-transparent",
      bottom:
        "after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-[6px] after:border-b-current after:border-x-transparent after:border-t-transparent",
      left: "after:left-full after:top-1/2 after:-translate-y-1/2 after:border-[6px] after:border-l-current after:border-y-transparent after:border-r-transparent",
      right:
        "after:right-full after:top-1/2 after:-translate-y-1/2 after:border-[6px] after:border-r-current after:border-y-transparent after:border-l-transparent",
    };

    const colors = {
      modern:
        "after:border-t-slate-900 after:border-b-slate-900 after:border-l-slate-900 after:border-r-slate-900",
      elegant:
        "after:border-t-white/95 after:border-b-white/95 after:border-l-white/95 after:border-r-white/95",
      frost:
        "after:border-t-white/20 after:border-b-white/20 after:border-l-white/20 after:border-r-white/20",
      neon: "after:border-t-black/90 after:border-b-black/90 after:border-l-black/90 after:border-r-black/90",
      soft: "after:border-t-slate-100 after:border-b-slate-100 after:border-l-slate-100 after:border-r-slate-100",
      glass:
        "after:border-t-white/10 after:border-b-white/10 after:border-l-white/10 after:border-r-white/10",
    };

    return `${baseClasses} ${positions[position]} ${colors[theme]}`;
  };

  const handleMouseEvents = (event) => {
    if (showOnClick && event.type === "click") {
      setVisible(!visible);
    } else if (!showOnClick) {
      setVisible(event.type === "mouseenter");
    }
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <div
        ref={triggerRef}
        onClick={handleMouseEvents}
        onMouseEnter={handleMouseEvents}
        onMouseLeave={() => !persistent && setVisible(false)}
        className="inline-flex items-center justify-center"
      >
        {children}
      </div>
      <AnimatePresence>
        {visible && (
          <motion.div
            ref={tooltipRef}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={getAnimationVariants()}
            transition={{
              duration: duration,
              delay: visible ? delay : 0,
            }}
            style={{ maxWidth, pointerEvents: "none" }}
            className={`
              fixed px-4 py-2.5 rounded-lg
              font-medium tracking-wide
              ${getFontSizeClass()}
              ${getThemeClasses()}
              ${getPositionClasses()}
              ${getArrowClasses()}
              ${className}
              z-50 select-none
              backdrop-saturate-150
              [text-wrap:balance]
            `}
          >
            <div className="relative z-10 flex items-center gap-1.5">
              {rich ? (
                <div 
                  dangerouslySetInnerHTML={{ __html: text }} 
                  className="relative z-10"
                />
              ) : (
                <span className="relative z-10">{text}</span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip; 