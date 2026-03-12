/** @type {import('mapify-cli').MapifyConfig} */
module.exports = {
  baseUrl: "https://mea-energy.eu", // Your actual domain
  outputPaths: ['./dist'], // Your build output directory
  pages: [
    // Static pages from your routes
    { path: '/', priority: 1.0, changeFreq: 'weekly' },
    { path: '/about', priority: 0.8, changeFreq: 'monthly' },
    { path: '/team', priority: 0.8, changeFreq: 'monthly' },
    { path: '/services', priority: 0.9, changeFreq: 'monthly' },
    { path: '/contact', priority: 0.7, changeFreq: 'yearly' },
    { path: '/news', priority: 0.7, changeFreq: 'daily' },
    { path: '/blogs', priority: 0.8, changeFreq: 'daily' },
    { path: '/payasyougo', priority: 0.8, changeFreq: 'monthly' },
    
    // For blog posts, you'll need to fetch dynamically
    // We'll handle these separately
  ],
  defaultChangeFreq: 'monthly',
  defaultPriority: 0.5,
  // This will use Git history for lastmod dates
  forceLastModificationDate: false
};