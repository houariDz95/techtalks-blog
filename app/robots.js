 
export default function robots() {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
      },
      {
        userAgent: ['Applebot', 'Bingbot'],

      },
    ],
    sitemap: 'https://techtalks-blog.netlify.app/sitemap.xml',
  }
}