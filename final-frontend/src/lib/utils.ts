import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function resolveImageUrl(url: string | null | undefined): string {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  
  // Get API URL and strip /api if it exists to get the root domain
  const apiBase = process.env.NEXT_PUBLIC_API_URL || "https://api.tarkshyasolution.in";
  const baseUrl = apiBase.endsWith("/api") ? apiBase.slice(0, -4) : apiBase;
  
  // Ensure the path starts with a slash
  const path = url.startsWith("/") ? url : `/${url}`;
  
  return `${baseUrl}${path}`;
}
