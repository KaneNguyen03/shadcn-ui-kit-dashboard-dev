export type ThemeOptionsProps = {
  containerContent?: boolean;
  colorSchema?: string;
  gradientStyle?: boolean;
  fontFamily?: string;
  direction: "ltr" | "rtl";
  layout: "vertical" | "horizontal";
  sidebar: "classic" | "column" | "compact" | "icon" | "hidden";
  navbar: "sticky" | "static" | "hidden";
  rounded: "none" | "sm" | "lg" | "xl";
  shadow: "none" | "sm" | "lg" | "xl";
};
