"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface LocalSearchProps {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearch = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: LocalSearchProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center  gap-4 rounded-[11px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          width={24}
          height={24}
          alt="Search"
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder text-dark400_light700  border-none bg-transparent shadow-none outline-none"
      />
      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          width={24}
          height={24}
          alt="Search"
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearch;
