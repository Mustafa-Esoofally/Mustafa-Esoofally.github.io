import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PROFILE } from "@/content/profileData.ts";

/** Merge Tailwind class names safely. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formateLocalMonth = (date: Date, timeZone: string = "UTC"): string =>
  new Intl.DateTimeFormat(PROFILE.language, { year: "numeric", month: "short", timeZone }).format(date);
