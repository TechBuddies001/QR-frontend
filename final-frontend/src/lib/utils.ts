import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function resolveImageUrl(url: string | null | undefined): string {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("data:") || url.startsWith("blob:")) {
    return url;
  }
  
  // Get API URL and strip trailing slashes & trailing /api
  const rawApiBase = process.env.NEXT_PUBLIC_API_URL || "https://api.tarkshyasolution.in";
  const cleanApiBase = rawApiBase.replace(/\/+$/, "");
  const baseUrl = cleanApiBase.replace(/\/api$/i, "");
  
  // Ensure the path starts with a slash
  const path = url.startsWith("/") ? url : `/${url}`;
  
  return `${baseUrl}${path}`;
}
