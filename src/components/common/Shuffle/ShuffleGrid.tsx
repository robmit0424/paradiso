"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const shuffle = (array: typeof squareData) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  { id: 1, src: "/grid_images/large_group_table.jpeg" },
  { id: 2, src: "/grid_images/thinking_outside.jpeg" },
  { id: 3, src: "/grid_images/group_outside.jpeg" },
  { id: 4, src: "/grid_images/inside_fridge.jpeg" },
  { id: 5, src: "/grid_images/bottle_service.jpeg" },
  { id: 6, src: "/grid_images/laughing.jpeg" },
  { id: 7, src: "/grid_images/eating_sandwich.jpeg" },
  { id: 8, src: "/grid_images/squatting.jpeg" },
  { id: 9, src: "/grid_images/yoga_group.jpeg" },
  { id: 10, src: "/grid_images/product_wall.jpeg" },
  { id: 11, src: "/grid_images/burger.jpeg" },
  { id: 12, src: "/grid_images/opening_bottle.jpeg" },
  { id: 13, src: "/grid_images/paradiso_sign.jpeg" },
  { id: 14, src: "/grid_images/charcuterie.jpeg" },
  { id: 15, src: "/grid_images/drink_cheers.jpeg" },
  { id: 16, src: "/grid_images/fridge_drinks.jpeg" },
];

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  // Start with the unshuffled order for SSR consistency
  const [squares, setSquares] = useState<React.ReactNode[]>(() =>
    squareData.map((sq) => (
      <motion.div
        key={sq.id}
        layout
        transition={{ duration: 1.5, type: "spring" }}
        className="w-full h-full"
        style={{
          backgroundImage: `url(${sq.src})`,
          backgroundSize: "cover",
        }}
      ></motion.div>
    ))
  );

  useEffect(() => {
    // Shuffle only on the client
    const shuffleSquares = () => {
      setSquares(
        shuffle([...squareData]).map((sq) => (
          <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full"
            style={{
              backgroundImage: `url(${sq.src})`,
              backgroundSize: "cover",
            }}
          ></motion.div>
        ))
      );
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    timeoutRef.current = setTimeout(shuffleSquares, 3000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleGrid;
