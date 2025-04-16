import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToTop(options?: ScrollToOptions) {
  window.scrollTo({
    top: 0,
    behavior: "auto",
    ...options
  })
}
