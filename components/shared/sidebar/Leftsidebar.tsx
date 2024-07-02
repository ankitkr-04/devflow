"use client";
import Link from "next/link";
import React from "react";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-1 flex-col gap-6 ">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <Link
            key={item.route}
            href={item.route}
            className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex-start  gap-4 bg-transparent p-4`}
          >
            <Image
              src={item.imgURL}
              width={20}
              height={20}
              alt={item.label}
              className={`${isActive ? "" : "invert-colors"} `}
            />
            <p
              className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden`}
            >
              {item.label}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

const Leftsidebar = () => {
  return (
    <aside className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between  overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <NavLinks />
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
              <Image
                src="/assets/icons/account.svg"
                width={20}
                height={20}
                alt="Sign Up"
                className="invert-colors hidden max-lg:block"
              />
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <p className="max-lg:hidden">Sign Up</p>
              <Image
                src="/assets/icons/sign-up.svg"
                width={20}
                height={20}
                alt="Sign Up"
                className="invert-colors hidden max-lg:block"
              />

            </Button>
          </Link>
        </div>
      </SignedOut>
    </aside>
  );
};

export default Leftsidebar;
