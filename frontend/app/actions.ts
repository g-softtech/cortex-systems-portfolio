"use server";

export async function checkBackendStatus() {
  return "online";
}

export async function getGithubActivity() {
  try {
    // Fetching public events for the specified GitHub username
    const res = await fetch("https://api.github.com/users/g-softtech/events/public", {
      cache: "no-store" // Temporarily bust the cache to force a fresh fetch
    });
    const data = await res.json();
    if (!Array.isArray(data)) {
      console.error("GitHub API Error:", data); // Print the exact error to your terminal
      return [];
    }

    return data
      .filter((event) => ["PushEvent", "CreateEvent", "PullRequestEvent", "WatchEvent"].includes(event.type))
      .slice(0, 3)
      .map((event) => {
        let message = "Telemetry recorded";
        if (event.type === "PushEvent") {
          message = event.payload.commits?.[0]?.message || "Pushed new commits";
        } else if (event.type === "CreateEvent") {
          message = `Created ${event.payload.ref_type || "repository"}`;
        } else if (event.type === "PullRequestEvent") {
          message = `${event.payload.action} pull request`;
        } else if (event.type === "WatchEvent") {
          message = "Starred repository";
        }

        return {
          id: event.id,
          repo: event.repo.name.split("/")[1] || event.repo.name,
          message: message,
          date: event.created_at,
        };
      });
  } catch (error) {
    return [];
  }
}

const projectSummaries: Record<string, string> = {
  "p1": "AI Summary: The School Management System is a full-stack application leveraging Next.js (RSC) for optimized data tables and Node.js with PostgreSQL for robust backend operations. It prioritizes efficient administrative workflows and scalability under Vercel's serverless constraints.",
  "p3": "AI Summary: ImpactConnect is a Next.js (TypeScript/Tailwind) platform designed for social impact initiatives. Its serverless architecture ensures cost-efficiency and scalability, while a strong frontend focus delivers an accessible and performant user experience, especially on mobile networks."
};

export async function getProjectAISummary(projectId: string) {
  try {
    // Simulate the AI generation network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    return projectSummaries[projectId] || "AI Summary: No detailed architectural summary available for this project yet.";
  } catch (error) {
    return "AI Summary: Backend error or project not found.";
  }
}

export async function submitContactForm(formData: FormData) {
  try {
    // Simulate network delay and backend Zod validation
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    const email = formData.get("email");
    const message = formData.get("message");
    
    if (!email || !message) return { success: false, error: "Validation failed" };
    
    return { success: true };
  } catch (error) {
    return { success: false, error: "Transmission failed" };
  }
}