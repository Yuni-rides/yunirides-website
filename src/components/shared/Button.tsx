// "use client";


// const colorMap: Record<string, string> = {
//   "yuni-purple":       "#822C89",
//   "yuni-navy":         "#2C3979",
//   "yuni-lavender":     "#EFF2FF",
//   "yuni-cream":        "#FAF8F0",
//   "yuni-card":         "#E5EAFF",
//   "yuni-white":        "#FFFFFF",
//   "yuni-text-dark":    "#1A1A2E",
//   "yuni-text-mid":     "#4A4A6A",
//   "yuni-text-light":   "#8888AA",
//   "yuni-border":       "#DDE2FF",
//   "yuni-purple-light": "#F3E8F5",
//   "yuni-olive":        "#7B8C5A",
//   "yuni-olive-bg":     "#C8D4A8",
//   "white":             "#FFFFFF",
//   "black":             "#000000",
// };

// // "yuni-purple" ya "#822C89" ya "white" — sab accept karta hai
// function resolveColor(value: string): string {
//   return colorMap[value] ?? value;
// }

// interface ButtonProps {
//   label: string;
//   onClick?: () => void;
//   href?: string;
//   variant?: "solid" | "outline";
//   bgColor?: string;
//   textColor?: string;
//   borderColor?: string;
//   hoverBgValue?: string; 
//   hoverTextValue?: string; 
//   width?: string;
//   size?: "sm" | "md" | "lg";
//   className?: string;
//   type?: "button" | "submit" | "reset";
//   disabled?: boolean;
// }

// const sizeClasses = {
//   sm: "px-4 py-2 text-[13px]",
//   md: "px-6 py-3 text-[14px]",
//   lg: "px-8 py-4 text-[15px]",
// };

// export default function Button({
//   label,
//   onClick,
//   href,
//   variant = "solid",
//   bgColor = "bg-yuni-purple",
//   textColor = "text-white",
//   borderColor = "border-yuni-purple",
//   hoverBgValue = "white",
//   hoverTextValue = "yuni-purple",
// width="w-full sm:w-[150px]",
// className="h-auto sm:h-[60px] sm:text-[16px]",
//   size = "md",
//   type = "button",
//   disabled = false,
// }: ButtonProps) {
//   const baseClass = [
//     "btn-sweep",
//     "inline-flex items-center justify-center",
//     "font-body font-semibold rounded-xl",
//     "border-[1.5px] cursor-pointer",
//     sizeClasses[size],
//     width,
//     variant === "outline" ? "bg-transparent" : bgColor,
//     textColor,
//     borderColor,
//     className,
//   ].join(" ");

//   const sweepStyle = {
//     "--hover-bg":   resolveColor(hoverBgValue),
//     "--hover-text": resolveColor(hoverTextValue),
//   } as React.CSSProperties;

//   const content = <span className="btn-sweep-inner">{label}</span>;

//   if (href) {
//     return (
//       <>
//         <ButtonStyles />
//         <a href={href} className={baseClass} style={sweepStyle}>
//           {content}
//         </a>
//       </>
//     );
//   }

//   return (
//     <>
//       <ButtonStyles />
//       <button type={type} onClick={onClick} disabled={disabled} className={baseClass} style={sweepStyle}>
//         {content}
//       </button>
//     </>
//   );
// }

// function ButtonStyles() {
//   return (
//     <style>{`
//       .btn-sweep {
//         position: relative;
//         overflow: hidden;
//         isolation: isolate;
//         transition: color 0.3s ease, transform 0.2s ease;
//       }
//       .btn-sweep::before {
//         content: '';
//         position: absolute;
//         inset: 0;
//         background: var(--hover-bg);
//         z-index: 0;
//         transform: translateX(-100%);
//         transition: transform 0.3s ease;
//       }
//       .btn-sweep:hover::before {
//         transform: translateX(0);
//       }
//       .btn-sweep:hover {
//         color: var(--hover-text) !important;
//         transform: translateY(-1px);
//       }
//       .btn-sweep:hover .btn-sweep-inner {
//         color: var(--hover-text);
//       }
//       .btn-sweep:active {
//         transform: scale(0.95);
//       }
//       .btn-sweep-inner {
//         position: relative;
//         z-index: 1;
//         transition: color 0.3s ease;
//       }
//     `}</style>
//   );
// }


"use client";

import React from "react";

const colorMap: Record<string, string> = {
  "yuni-purple":       "#822C89",
  "yuni-navy":         "#2C3979",
  "yuni-lavender":     "#EFF2FF",
  "yuni-cream":        "#FAF8F0",
  "yuni-card":         "#E5EAFF",
  "yuni-white":        "#FFFFFF",
  "yuni-text-dark":    "#1A1A2E",
  "yuni-text-mid":     "#4A4A6A",
  "yuni-text-light":   "#8888AA",
  "yuni-border":       "#DDE2FF",
  "yuni-purple-light": "#F3E8F5",
  "yuni-olive":        "#7B8C5A",
  "yuni-olive-bg":     "#C8D4A8",
  "white":             "#FFFFFF",
  "black":             "#000000",
};

function resolveColor(value: string): string {
  return colorMap[value] ?? value;
}

interface ButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  target?: "_blank" | "_self";
  icon?: React.ReactNode;
  variant?: "solid" | "outline";
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  hoverBgValue?: string;
  hoverTextValue?: string;
  width?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const sizeClasses = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-6 py-3 text-[14px]",
  lg: "px-8 py-4 text-[15px]",
};

export default function Button({
  label,
  onClick,
  href,
  target,
  icon,
  variant = "solid",
  bgColor = "bg-yuni-purple",
  textColor = "text-white",
  borderColor = "border-yuni-purple",
  hoverBgValue = "white",
  hoverTextValue = "yuni-purple",
  width = "w-full sm:w-[150px]",
  className = "h-auto sm:h-[60px] sm:text-[16px]",
  size = "md",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClass = [
    "btn-sweep",
    "inline-flex items-center justify-center gap-2.5",
    "font-body font-semibold rounded-xl",
    "border-[1.5px] cursor-pointer",
    sizeClasses[size],
    width,
    variant === "outline" ? "bg-transparent" : bgColor,
    textColor,
    borderColor,
    className,
  ].join(" ");

  const sweepStyle = {
    "--hover-bg":   resolveColor(hoverBgValue),
    "--hover-text": resolveColor(hoverTextValue),
  } as React.CSSProperties;

  const content = (
    <>
      {icon && <span className="btn-sweep-icon relative z-10 flex-shrink-0">{icon}</span>}
      <span className="btn-sweep-inner relative z-10">{label}</span>
    </>
  );

  if (href) {
    return (
      <>
        <ButtonStyles />
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={baseClass}
          style={sweepStyle}
        >
          {content}
        </a>
      </>
    );
  }

  return (
    <>
      <ButtonStyles />
      <button type={type} onClick={onClick} disabled={disabled} className={baseClass} style={sweepStyle}>
        {content}
      </button>
    </>
  );
}

function ButtonStyles() {
  return (
    <style>{`
      .btn-sweep {
        position: relative;
        overflow: hidden;
        isolation: isolate;
        transition: color 0.3s ease, transform 0.2s ease;
      }
      .btn-sweep::before {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--hover-bg);
        z-index: 0;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
      }
      .btn-sweep:hover::before {
        transform: translateX(0);
      }
      .btn-sweep:hover {
        color: var(--hover-text) !important;
        transform: translateY(-1px);
      }
      .btn-sweep:hover .btn-sweep-inner,
      .btn-sweep:hover .btn-sweep-icon {
        color: var(--hover-text);
      }
      .btn-sweep:hover .btn-sweep-icon svg path {
        fill: var(--hover-text);
        transition: fill 0.3s ease;
      }
      .btn-sweep:active {
        transform: scale(0.95);
      }
      .btn-sweep-inner {
        position: relative;
        z-index: 1;
        transition: color 0.3s ease;
      }
      .btn-sweep-icon {
        position: relative;
        z-index: 1;
        transition: color 0.3s ease;
      }
      .btn-sweep-icon svg path {
        transition: fill 0.3s ease;
      }
    `}</style>
  );
}
