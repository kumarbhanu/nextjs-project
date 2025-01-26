"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        width={48}
        height={8}
        alt="logo"
        priority={true}
      />
      <div className="mt-6 shadow-md w-1/3 p-6 text-center ">
        <h1 className="font-bold mb-4 text-3xl">Not found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <Button
          variant="outline"
          className="mt-4 ml-2 "
          onClick={() => (window.location.href = "/")}
        >
          Go back to home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
