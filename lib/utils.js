import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { compareDesc, parseISO } from "date-fns";
import cheerio from 'cheerio';


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

export const blogContents = (blogContent) => {
  const $ = cheerio.load(blogContent);

  const levelNames = ['one', 'two', 'three']; // Add more as needed
  const newHeadings = [];

  $('h1, h2, h3').each((index, element) => {
    const headingText = $(element).text().trim(); // Trim spaces from start and end
    const headingLevel = $(element).prop('tagName').toLowerCase().replace('h', '');

    // Convert headingLevel to the corresponding level name
    const levelName = levelNames[parseInt(headingLevel) - 1];

    // Generate ID by replacing spaces with hyphens and converting to lowercase
    const id = headingText.toLowerCase().replace(/\s+/g, '-');

    newHeadings.push({ text: headingText, id, level: levelName });
  });

  return newHeadings;
};
