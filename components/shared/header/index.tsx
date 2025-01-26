import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ModeToggle from "../mode-toggle";
import Menu from "@/components/shared/header/menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              width={48}
              height={48}
              alt="app"
              src="/images/logo.svg"
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>

        <div className="space-x-2">
       <Menu/>
        </div>
      </div>
    </header>
  );
};

export default Header;
