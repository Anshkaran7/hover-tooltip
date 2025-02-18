import React, { ReactNode, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface TooltipProps {
  children: ReactNode;
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  theme?: "modern" | "elegant" | "frost" | "neon" | "soft" | "glass";
  delay?: number;
  arrow?: boolean;
  maxWidth?: string;
  className?: string;
  animation?: "smooth" | "pop" | "shift" | "elastic" | "fade" | "scale";
  duration?: number;
  distance?: number;
  showOnClick?: boolean;
  persistent?: boolean;
  fontSize?: "sm" | "base" | "lg";
  rich?: boolean; // Allows HTML content in tooltip
}

const Tooltip: React.FC<TooltipProps> = ({
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
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        persistent &&
        tooltipRef.current &&
        triggerRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
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
      pop: {
        hidden: {
          ...baseOpacity,
          scale: 0.9,
          ...(position === "top" && { y: distance, x: "-50%" }),
          ...(position === "bottom" && { y: -distance, x: "-50%" }),
          ...(position === "left" && { x: distance, y: "-50%" }),
          ...(position === "right" && { x: -distance, y: "-50%" }),
        },
        visible: {
          opacity: 1,
          scale: 1,
          y: position === "top" || position === "bottom" ? 0 : "-50%",
          x: position === "left" || position === "right" ? 0 : "-50%",
          transition: {
            type: "spring",
            damping: 15,
            stiffness: 400,
          },
        },
      },
      fade: {
        hidden: {
          opacity: 0,
          y: position === "top" || position === "bottom" ? 0 : "-50%",
          x: position === "left" || position === "right" ? 0 : "-50%",
        },
        visible: {
          opacity: 1,
          y: position === "top" || position === "bottom" ? 0 : "-50%",
          x: position === "left" || position === "right" ? 0 : "-50%",
          transition: {
            type: "tween",
            ease: "easeInOut",
          },
        },
      },
      scale: {
        hidden: {
          opacity: 0,
          scale: 0.5,
          y: position === "top" || position === "bottom" ? 0 : "-50%",
          x: position === "left" || position === "right" ? 0 : "-50%",
        },
        visible: {
          opacity: 1,
          scale: 1,
          y: position === "top" || position === "bottom" ? 0 : "-50%",
          x: position === "left" || position === "right" ? 0 : "-50%",
          transition: {
            type: "spring",
            damping: 20,
            stiffness: 350,
          },
        },
      },
      elastic: {
        hidden: {
          ...baseOpacity,
          scale: 0.8,
          ...(position === "top" && { y: distance * 1.5, x: "-50%" }),
          ...(position === "bottom" && { y: -distance * 1.5, x: "-50%" }),
          ...(position === "left" && { x: distance * 1.5, y: "-50%" }),
          ...(position === "right" && { x: -distance * 1.5, y: "-50%" }),
        },
        visible: {
          opacity: 1,
          scale: 1,
          y: position === "top" || position === "bottom" ? 0 : "-50%",
          x: position === "left" || position === "right" ? 0 : "-50%",
          transition: {
            type: "spring",
            damping: 8,
            stiffness: 300,
            mass: 0.8,
          },
        },
      },
      shift: {
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
            damping: 20,
            stiffness: 300,
          },
        },
      },
    };
    return animations[animation];
  };

  const getThemeClasses = () => {
    const themes = {
      modern: "bg-slate-900 text-white shadow-lg shadow-slate-900/20",
      elegant:
        "bg-white/95 text-slate-900 shadow-xl border border-slate-200/50 backdrop-blur-sm",
      frost:
        "bg-white/20 backdrop-blur-md text-white shadow-lg border border-white/30",
      neon: "bg-black/90 text-white shadow-lg border-2 border-purple-500/50 shadow-purple-500/20",
      soft: "bg-slate-100 text-slate-700 shadow-md border border-slate-200",
      glass:
        "bg-white/10 backdrop-blur-lg border border-white/20 text-white shadow-xl",
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

  const handleMouseEvents = (event: React.MouseEvent) => {
    if (showOnClick && event.type === "click") {
      setVisible(!visible);
    } else if (!showOnClick) {
      setVisible(event.type === "mouseenter");
    }
  };

  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        onClick={handleMouseEvents}
        onMouseEnter={handleMouseEvents}
        onMouseLeave={() => !persistent && setVisible(false)}
        className="cursor-pointer"
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
            style={{ maxWidth }}
            className={`
              fixed px-4 py-2 rounded-lg
              font-medium tracking-wide
              ${getFontSizeClass()}
              ${getThemeClasses()}
              ${getPositionClasses()}
              ${getArrowClasses()}
              ${className}
            `}
          >
            {rich ? <div dangerouslySetInnerHTML={{ __html: text }} /> : text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
