declare module "hover-tooltip" {
  import { ComponentType } from "react";

  export interface TooltipProps {
    // Define the props your Tooltip component accepts
    content: string;
    position?: "top" | "bottom" | "left" | "right";
    // Add other props as needed
  }

  export const Tooltip: ComponentType<TooltipProps>;
}
