"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover"
      />
      <div className="flex  items-center justify-center">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt="ing"
              width={150}
              height={150}
              className={cn(
                "border mr-2 cursor-pointer hover:border-green-600",
                current === index && "border-green-900"
              )}
              onClick={() => {
                setCurrent(index);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
