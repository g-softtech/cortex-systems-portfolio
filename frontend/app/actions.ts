"use server";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5001";

export async function checkBackendStatus() {
  try {
    // Server-to-server fetch bypasses all browser CORS and network policies!
    const res = await fetch(`${API_URL}`, { cache: "no-store" });
    const data = await res.json();
    return data.status === "online" ? "online" : "offline";
  } catch (error) {
    return "offline";
  }
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

export async function getProjectAISummary(projectId: string) {
  try {
    const res = await fetch(`${API_URL}/api/project-summary/${projectId}`, {
      cache: "no-store", // Always fetch fresh summary
    });
    const data = await res.json();
    return data.summary || "AI Summary: Could not retrieve summary for this project.";
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