export type Article = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string;
  date: string;
};

export const articles: Article[] = [
  {
    slug: "building-better-fullstack-applications",
    title: "Building Better Fullstack Applications",
    category: "Architecture",
    readTime: "4 min read",
    summary: "How I approach building scalable dashboards using Next.js, balancing server and client components to keep performance and maintainability in check.",
    content: `When I build dashboards and data-heavy applications, I always start with a simple question: what actually needs to be interactive? With modern Next.js and the App Router, we have the luxury of rendering most of our UI on the server. This is a game-changer for performance because it means we're sending far less JavaScript down to the user's browser.\n\nHowever, it's easy to accidentally throw a "use client" directive at the very top of your component tree just to make a dropdown work, effectively opting out of all those server-side benefits. In real-world projects, I've found that the best approach is to push client boundaries as far down the tree as possible. I keep my layouts, data fetching wrappers, and static shells as Server Components, and only make the specific interactive pieces—like charts, command menus, or complex forms—Client Components.\n\nThis isn't just about chasing a high Lighthouse score; it's about real user experience. When you're dealing with users on slower mobile networks or older devices, a bloated JavaScript bundle translates directly to a frustrating, sluggish interface. By intentionally deciding where interactivity lives, I can build applications that feel instant and remain easy to maintain as they grow.`,
    date: "2026-05-10"
  },
  {
    slug: "choosing-the-right-authentication-approach",
    title: "Choosing the Right Authentication Approach",
    category: "Security",
    readTime: "6 min read",
    summary: "A practical look at deciding between sessions and JWTs, and why I often prefer secure cookies for user-facing production apps.",
    content: `Authentication is one of those areas where the industry trend doesn't always align with the most practical solution. For a long time, JSON Web Tokens (JWTs) were the default answer for everything. But when building actual production applications, especially user-facing dashboards or SaaS products, JWTs introduce a lot of hidden complexity—primarily around revocation. If a user's account is compromised, or they just want to log out of all devices, invalidating a stateless JWT is surprisingly difficult without building a cumbersome blacklist.\n\nThat's why, for most fullstack web applications I build, I lean heavily towards traditional, database-backed sessions with HttpOnly, SameSite=Strict secure cookies. It's a proven, boring technology. It gives me absolute control over the session lifecycle directly from the server, entirely eliminates the risk of XSS token theft, and keeps the frontend code incredibly simple since the browser handles the cookie automatically.\n\nI still use JWTs, but I reserve them for what they do best: stateless service-to-service communication or short-lived access grants. Choosing the right auth method isn't about using the newest tech; it's about finding the balance between security, user experience, and long-term maintainability for the specific product at hand.`,
    date: "2026-04-22"
  },
  {
    slug: "improving-react-performance-in-real-projects",
    title: "Improving React Performance in Real Projects",
    category: "Performance",
    readTime: "5 min read",
    summary: "How I identify and fix performance bottlenecks in React applications without resorting to theoretical over-optimization.",
    content: `Performance optimization in React often gets a bad reputation because developers tend to optimize prematurely. We've all seen codebases where every single function is wrapped in useCallback and every component is wrapped in React.memo, making the code nearly impossible to read. In my experience, real-world performance issues rarely stem from missing memoization.\n\nWhen a React app feels slow, my first step is always to open the React DevTools Profiler and actually look at the render timeline. More often than not, the culprit is state being held too high in the component tree. If typing in an input field causes the entire dashboard layout to re-render, moving that state down into the specific input component fixes the lag instantly, without adding any complex caching logic.\n\nI only reach for tools like useMemo when I have concrete evidence of an expensive calculation causing dropped frames. My goal is always to keep the codebase simple and readable first. A fast application is useless if the code is so convoluted that no one can safely add new features to it. True performance comes from a solid understanding of how React works under the hood, not just blindly applying optimization techniques.`,
    date: "2026-05-18"
  }
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}