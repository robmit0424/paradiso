import React from "react";

type GeneralSectionProps = {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
};

function GeneralSection({
  children,
  className = "",
  backgroundColor,
}: GeneralSectionProps) {
  return (
    <section
      className={`flex items-center justify-center w-full min-h-screen ${className}`}
      style={backgroundColor ? { backgroundColor } : {}}
    >
      <div className="w-full max-w-6xl px-4 mx-auto">{children}</div>
    </section>
  );
}

export default GeneralSection;
