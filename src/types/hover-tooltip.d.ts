declare module "hover-tooltip" {
  import { ReactNode } from "react";

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
    rich?: boolean;
  }

  export const Tooltip: React.FC<TooltipProps>;
  export default Tooltip;
}
