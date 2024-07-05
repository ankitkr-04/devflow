import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MetricProps {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  textStyles?: string;
  href?: string;
  isAuthor?: boolean;
}

const Metric = ({
  imgUrl,
  alt,
  value,
  textStyles,
  title,
  href,
  isAuthor,
}: MetricProps) => {
  const MetricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`object-contain ${href ? "rounded-full" : ""}`}
      />
      <p className={`${textStyles} flex items-center gap-1`}>
        {value}
        <span
          className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
        >
          {title}
        </span>
      </p>
    </>
  );
  return (
    <div className={`flex-center gap-1 ${href ? "" : "flex-wrap"}`}>
      {href ? (
        <Link href={href} className="flex items-center gap-1">
          {MetricContent}
        </Link>
      ) : (
        MetricContent
      )}
    </div>
  );
};

export default Metric;
