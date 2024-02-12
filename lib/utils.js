import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { compareDesc, parseISO } from "date-fns";


export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );
};

export function calculateReadingTime(text) {
  // Assuming the average reading speed is 200 words per minute
  const wordsPerMinute = 200;

  // Count the number of words in the text
  const wordCount = text.split(/\s+/).length;

  // Calculate the reading time in minutes
  const readingTimeMinutes = wordCount / wordsPerMinute;

  // Round up to the nearest minute
  const readingTime = Math.ceil(readingTimeMinutes);

  return readingTime;
}

