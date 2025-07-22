import React from "react";

const DrawOutlineButton = ({
  children,
  ...rest
}: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button
      {...rest}
      className="group cursor-pointer relative px-6 py-3 font-semibold text-[var(--color-primary)] font-[family-name:var(--font-geist-sans)] bg-white transition-colors duration-[400ms] hover:text-[var(--color-secondary)]"
    >
      <span>{children}</span>
      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-[var(--color-primary)] transition-all duration-100 group-hover:w-full" />
      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-[var(--color-primary)] transition-all delay-100 duration-100 group-hover:h-full" />
      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[var(--color-primary)] transition-all delay-200 duration-100 group-hover:w-full" />
      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[var(--color-primary)] transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default DrawOutlineButton;
