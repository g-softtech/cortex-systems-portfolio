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
    slug: "scaling-nextjs-app-router",
    title: "Scaling Next.js App Router for Dynamic Dashboards",
    category: "Architecture",
    readTime: "4 min read",
    summary: "A deep dive into balancing Server Components (RSC) and Client Components to minimize bundle size while maintaining high interactivity in data-heavy views.",
    content: `When building highly interactive dashboards, the Next.js App Router presents a paradigm shift. Instead of sending a massive JavaScript bundle to the client, we can now keep heavy data-fetching and table rendering strictly on the server using React Server Components (RSC).\n\nHowever, the challenge arises when you need complex interactivity—like the Command Menu or real-time polling you see on this portfolio. If you make the root layout a Client Component, you lose the benefits of RSC entirely.\n\nThe optimal solution is the "Leaf Node" pattern: keep the root layouts and data wrappers as Server Components, and only inject "use client" at the lowest possible branches of your component tree. This constraint-driven approach ensures maximum performance without sacrificing user experience.`,
    date: "2026-05-10"
  },
  {
    slug: "jwt-vs-sessions",
    title: "JWT vs. Sessions: A Pragmatic Approach",
    category: "Security",
    readTime: "6 min read",
    summary: "Why I default to HttpOnly secure cookies and database-backed sessions for web apps, reserving JWTs strictly for stateless service-to-service communication.",
    content: `The tech industry has an obsession with JSON Web Tokens (JWTs). While they are excellent for stateless service-to-service communication, using them as the primary session mechanism in a browser-based web application introduces massive security and revocation headaches.\n\nOnce a JWT is issued, it cannot be easily revoked without building a complex blacklist architecture—which defeats the purpose of it being stateless in the first place.\n\nIn my product architecture, I default to HttpOnly, SameSite=Strict cookies tied to a fast Redis session store. This provides absolute control over session revocation, eliminates XSS theft risks, and keeps the frontend completely ignorant of the underlying security mechanism. It's a boring technology choice, but boring technology rarely wakes you up at 3 AM.`,
    date: "2026-04-22"
  },
  {
    slug: "react-performance-optimizations",
    title: "Practical React Performance Optimizations",
    category: "Performance",
    readTime: "5 min read",
    summary: "Real-world strategies for keeping your React applications lightning fast without premature optimization.",
    content: `When building large-scale React applications, performance issues usually creep in slowly rather than all at once. Before reaching for useMemo or useCallback, my first step is always to check the component hierarchy.\n\nMore often than not, simply pushing state down closer to where it is actually used prevents unnecessary top-level re-renders and solves the performance bottleneck entirely.\n\nWhen memoization is actually required, I profile the render times using React DevTools to ensure the cost of memoizing isn't actually higher than the cost of re-rendering. It is all about measuring first, and optimizing second.`,
    date: "2026-05-18"
  }
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}