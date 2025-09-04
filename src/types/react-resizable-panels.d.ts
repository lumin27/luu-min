declare module "react-resizable-panels" {
  import * as React from "react";

  export interface PanelGroupProps
    extends React.HTMLAttributes<HTMLDivElement> {
    direction?: "horizontal" | "vertical";
  }

  export const PanelGroup: React.FC<PanelGroupProps>;

  export const Panel: React.FC<React.HTMLAttributes<HTMLDivElement>>;

  export interface PanelResizeHandleProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
  }

  export const PanelResizeHandle: React.FC<PanelResizeHandleProps>;
}
