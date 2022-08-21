import Image from "next/image";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import useAuth from '../customHooks/useAuth'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEffect, useState } from "react";
import Link from "next/link";
import BasicMenu from "./BasicMenu";
import { Avatar } from "@mui/material";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled ? "bg-[#141414]": ""} m-auto py-3 fixed top-0 z-50 flex w-full items-center justify-between px-4 transition-all lg:px-10 lg:py-6`}>
      <div className="flex items-center">
        <BasicMenu />
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain mx-2"
        />

        <div className="hidden space-x-4 md:flex mx-2">
          <p className="headerLink cursor-default font-semibold text-white hover:text-white">
            Home
          </p>
          <p className="headerLink">TV Shows</p>
          <p className="headerLink">Movies</p>
          <p className="headerLink">New & Popular</p>
          <p className="headerLink">My List</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline cursor-pointer" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6 cursor-pointer" />
        <Link href="/account">
          <AccountCircleIcon className="cursor-pointer"></AccountCircleIcon>
        </Link>
        <Avatar
          className="cursor-pointer"
          alt="Remy Sharp"
          sx={{ width: 30, height: 30 }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsHj5y8KIzLxTTC6wstr27Mxoh3lbSZeNzjQ&usqp=CAU"
          onClick={logout}
        />
      </div>
    </header>
  );
}

export default Header;
