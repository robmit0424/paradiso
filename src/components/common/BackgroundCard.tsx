"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type BackgroundCardProps = {
  headerText: string;
  bodyText?: string;
  backgroundImage?: string;
  hoverBackgroundImage?: string;
};

export function BackgroundCard({
  headerText,
  bodyText,
  backgroundImage,
  hoverBackgroundImage,
}: BackgroundCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const bg =
    isHovered && hoverBackgroundImage ? hoverBackgroundImage : backgroundImage;

  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 transition-all duration-500 bg-gray-200"
        )}
        style={{
          backgroundImage: bg ? `url('${bg}')` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text relative z-50">
          <h2 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {headerText}
          </h2>
          {bodyText && (
            <p className="font-normal text-base text-gray-50 relative my-4">
              {bodyText}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BackgroundCard;
