"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [searchText, setSearchText] = React.useState<string>("");
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Cart", href: "/cart" },
    { name: "Profile", href: "/profile" },
    { name: "Studio", href: "/studio" },
  ];

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleClearSearchText = () => {
    setSearchText("");
  };

  return (
    <div className="w-full h-20 bg-stone-100 border border-stone-200 sticky top-0 z-50">
      <nav
        aria-label="navigation"
        className="h-full max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-2"
      >
        <Logo />
        <div className="border border-stone-200 hidden lg:inline-flex lg:w-[600px] bg-stone-50 active:ring-2 center rounded-lg">
          <input
            id="search"
            type="text"
            name="searchText"
            placeholder="Search for a product"
            className="w-full bg-transparent outline-none p-2 hidden lg:block"
            value={searchText}
            onChange={handleSearchText}
          />
          <label
            htmlFor="search"
            className="px-2 cursor-pointer hidden lg:block"
          >
            <div onClick={handleClearSearchText}>
              {searchText ? (
                <div className="text-stone-900 hover:text-red-600 transition-colors duration-300">
                  <IconClose />
                </div>
              ) : (
                <IconSearch />
              )}
            </div>
          </label>
        </div>
        <ul aria-label="menu" className="flex divide-x divide-primary-light">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`px-2 transition-colors  hover:underline hover:underline-offset-4 ${
                pathname === item.href ? "text-primary font-bold" : ""
              }`}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div className="cursor-pointer inline-flex lg:hidden">
          <IconMenu />
        </div>
      </nav>
    </div>
  );
};

const IconSearch = () => (
  <>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2497_25824)">
        <path
          d="M21 21L16.6569 16.6569M16.6569 16.6569C18.1046 15.2091 19 13.2091 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C13.2091 19 15.2091 18.1046 16.6569 16.6569Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2497_25824">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </>
);

const IconClose = () => (
  <>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </>
);

const IconMenu = () => (
  <>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 15H21M3 9H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </>
);

export default Navbar;
