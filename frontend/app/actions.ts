"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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
  "p1": "AI Summary: The Smart School Management System is a full-stack MERN application tailored for modern African educational institutions. It features a robust multi-role authentication architecture using JWT and Context API, driving secure, isolated dashboards for admins, teachers, students, and parents. The system integrates an AI-assistant, Recharts analytics, and an Express REST API.",
  "p3": "AI Summary: ImpactConnect is a full-stack NGO management platform leveraging React (Vite) and Node.js/Express. It features secure JWT authentication, Paystack donation integration, and a MongoDB Atlas database. The architecture demonstrates clean, decoupled deployment with the frontend on Vercel and the REST API on Render."
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
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const name = formData.get("name") as string;
    const projectType = formData.get("projectType") as string;

    if (!email || !message || !name) {
      return { success: false, error: "Validation failed" };
    }

    const { error } = await resend.emails.send({
      from: 'Cortex Portfolio <onboarding@resend.dev>', // Resend testing email
      to: 'tosinjaiyeoba@yahoo.com', // Your actual email address
      subject: `New Inquiry from ${name} - ${projectType}`,
      text: `Name: ${name}\nEmail: ${email}\nInquiry Type: ${projectType}\n\nMessage:\n${message}`,
      replyTo: email, // Lets you hit "reply" directly in your email client
    });

    if (error) {
      console.error("Resend Delivery Error:", error);
      return { success: false, error: "Transmission failed" };
    }

    return { success: true };
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, error: "Transmission failed" };
  }
}