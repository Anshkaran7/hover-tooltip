declare module "hover-tooltip" {
  import { ReactNode } from "react";

  export interface TooltipProps {
    text: string;
    position?: "top" | "bottom" | "left" | "right";
    children: ReactNode;
  }

  const Tooltip: React.FC<TooltipProps>;
  export default Tooltip;
}
