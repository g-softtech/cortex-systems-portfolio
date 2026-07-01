# How to Add a New Technical Insight (Blog Post)

Because this portfolio uses a highly optimized, statically generated routing system, you don't need to create any new pages or folders to add a blog post. 

Just follow these two steps:

## Step 1: Add the Article to the Database
1. Open the file: `frontend/lib/articles.ts`
2. Scroll down to the `articles` array.
3. Add a new article object to the list. (Make sure to separate paragraphs in the `content` field with `\n\n`).

**Template to copy/paste:**
```typescript
  {
    slug: "your-url-friendly-title-here",
    title: "Your Awesome Article Title",
    category: "Architecture", // Or Security, Performance, etc.
    readTime: "5 min read",
    summary: "A brief 1-2 sentence summary for the dashboard card.",
    content: `Your first paragraph here.\n\nYour second paragraph here.\n\nYour third paragraph here.`,
    date: "2026-06-01" // YYYY-MM-DD format
  }
```

## Step 2: Add it to the AI Command Center (CTRL+K)
To ensure recruiters and visitors can search for your new article, add it to the Command Menu.
1. Open the file: `frontend/components/command-menu.tsx`
2. Find the `COMMANDS` array at the top of the file.
3. Add a new entry right beneath the other "Insights".

**Template to copy/paste:**
```typescript
  { id: "b4", title: "Your Awesome Article Title", category: "Insights", description: "Read technical article on [topic]", link: "/insights/your-url-friendly-title-here" },
```
*(Note: Make sure the `id` is unique like b4, b5, etc., and the `link` matches your `slug` from Step 1!)*

---
**That's it!** Once you save both files, Next.js will automatically generate the new web page, add the card to your dashboard, and make it instantly searchable via CTRL+K.