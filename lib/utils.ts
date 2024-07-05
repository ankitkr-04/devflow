import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimeStamp = (createdAt: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor(
    (now.getTime() - createdAt.getTime()) / 1000
  );

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
};

export const formatNumber = (num: number): string => {
  if (num < 1_000) {
    return num.toString();
  } else if (num < 1_000_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  } else if (num < 1_000_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  } else {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
}
