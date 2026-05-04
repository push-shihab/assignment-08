"use client";
import { authClient } from "@/app/lib/auth.client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const session = authClient.useSession();
  const currentPath = usePathname();
  const links = (
    <>
      <li>
        <Link
          href={"/"}
          className={`${currentPath === "/" && "text-[#38bdf8]"}`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/products"}
          className={`${currentPath === "/products" && "text-[#38bdf8]"}`}
        >
          Products
        </Link>
      </li>
      <li>
        <Link href={"/my-profile"}>My Profile</Link>
      </li>
    </>
  );
  return (
    <nav className="bg-[#0f172a]">
      <div className="container mx-auto">
        <div className="navbar text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#38bdf8]"
              >
                {links}
              </ul>
            </div>
            <Link href={"/"} className="font-extrabold text-4xl cursor-pointer">
              <span className="text-[#38bdf8]">Sun</span>
              <span className="text-white">Cart</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end gap-3">
            {session.data ? (
              <>
                <div>
                  <Image
                    src={session.data.user.image}
                    alt={session.data.user.name}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-[#38bcf6]"
                  ></Image>
                </div>
                <button
                  onClick={() => authClient.signOut()}
                  className="btn btn-outline border-[#38bdf8] text-[#38bdf8]"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href={"/login"}
                  className="btn btn-outline border-[#38bdf8] text-[#38bdf8]"
                >
                  Login
                </Link>
                <Link
                  href={"/register"}
                  className="btn text-white border-none shadow-none bg-[#2563eb]"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
