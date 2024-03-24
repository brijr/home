"use client";

import React, { ReactNode, useRef, useState, useEffect } from "react";

type MasonryProps = {
  children: ReactNode;
};

const Masonry: React.FC<MasonryProps> = ({ children }) => {
  const [masonryColumns, setMasonryColumns] = useState<ReactNode[][]>([]);
  const [columns, setColumns] = useState(2);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateColumns() {
      if (window.innerWidth <= 640) {
        setColumns(2); // 2 columns for mobile view
      } else if (window.innerWidth <= 1024) {
        setColumns(2); // 2 columns for tablet view
      } else {
        setColumns(3); // 3 columns for desktop view
      }
    }

    updateColumns();
    window.addEventListener("resize", updateColumns);

    return () => {
      window.removeEventListener("resize", updateColumns);
    };
  }, []);

  useEffect(() => {
    if (Array.isArray(children)) {
      const columnsArray: ReactNode[][] = [...Array(columns)].map(() => []);
      children.forEach((child, index) => {
        columnsArray[index % columns].push(child);
      });
      setMasonryColumns(columnsArray);
    } else {
      setMasonryColumns([[children]]);
    }
  }, [children, columns]);

  return (
    <div ref={ref} className="my-4 flex">
      {masonryColumns.map((column, index) => (
        <div key={index} className="w-full px-2 md:w-1/2 lg:w-1/3">
          {column.map((item, idx) => (
            <div key={idx} className="mb-4">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Masonry;
