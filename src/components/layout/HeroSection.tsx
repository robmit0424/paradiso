import React from "react";

type HeroSectionProps = {
  backgroundImage?: string;
  overlay?: React.ReactNode;
  children: React.ReactNode;
};

const HeroSection = ({
  backgroundImage,
  overlay,
  children,
}: HeroSectionProps) => {
  return (
    <section
      className="relative flex items-center justify-center w-full min-h-screen h-[100vh] overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "100vh",
              height: "100vh",
              width: "100vw",
            }
          : {}
      }
    >
      {/* Optional overlay for tint/gradient */}
      {overlay ? (
        <div className="absolute inset-0 z-0">{overlay}</div>
      ) : (
        <div className="absolute inset-0 z-0 bg-black/40" />
      )}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4">
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
