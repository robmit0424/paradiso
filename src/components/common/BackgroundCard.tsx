"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type BackgroundCardProps = {
  headerText: string;
  bodyText?: string;
  backgroundImage?: string;
  hoverBackgroundImage?: string;
  hoverImage?: string;
};

export function BackgroundCard({
  headerText,
  bodyText,
  backgroundImage,
  hoverBackgroundImage,
  hoverImage,
}: BackgroundCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const bg =
    isHovered && hoverBackgroundImage ? hoverBackgroundImage : backgroundImage;

  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border transition-all duration-500 bg-gray-200"
        )}
        style={{
          backgroundImage: bg ? `url('${bg}')` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderColor: isHovered ? "#1ACAD4" : "#eee",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Overlay: dark, fades out on hover */}
        <div
          className="absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            background: "rgba(0,0,0,0.2)",
            opacity: isHovered ? 0 : 1,
            pointerEvents: "none",
          }}
        />
        {/* Overlay: pink, fades in on hover */}
        <div
          className="absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            background: "#ec9aad",
            opacity: isHovered ? 0.3 : 0,
            pointerEvents: "none",
          }}
        />
        <div
          className={
            "text absolute left-1/2 w-full px-4 z-20 flex flex-col items-center transition-all duration-500"
          }
          style={{
            bottom: isHovered ? "50%" : "2rem",
            transform: isHovered
              ? "translate(-50%, 50%) scale(1.15)"
              : "translate(-50%, 0) scale(1)",
            transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
            textAlign: "center",
          }}
        >
          {hoverImage && (
            <img
              src={hoverImage}
              alt="Hover Icon"
              style={{
                opacity: isHovered ? 1 : 0,
                transition: "opacity 0.4s cubic-bezier(0.4,0,0.2,1)",
                width: "2.5rem",
                height: "2.5rem",
                marginBottom: "0.5rem",
                objectFit: "contain",
                pointerEvents: "none",
              }}
            />
          )}
          <h2
            className={`font-bold text-gray-50 relative transition-all duration-500 ${
              isHovered ? "text-3xl md:text-5xl" : "text-xl md:text-3xl"
            }`}
          >
            {headerText}
          </h2>
          {bodyText && (
            <p
              className={`font-normal text-gray-50 relative my-4 transition-all duration-500 ${
                isHovered ? "text-lg md:text-2xl" : "text-base"
              }`}
            >
              {bodyText}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BackgroundCard;
