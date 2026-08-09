"use server";

import { generateText } from "ai";
import { groq } from "@ai-sdk/groq";
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
  // 1. Fallback if no API key is provided, using the old simulated summary
  if (!process.env.GROQ_API_KEY) {
    await new Promise((resolve) => setTimeout(resolve, 800)); // Keep the simulated delay
    const simulatedSummary = projectSummaries[projectId] || "AI Summary: No detailed architectural summary available for this project yet.";
    return `SYSTEM: GROQ_API_KEY missing. Using simulated response.\n\n${simulatedSummary}`;
  }

  // 2. Feed the AI the exact context of your projects
  const projectContexts: Record<string, string> = {
    "p1": "Smart School Management System: A full-stack MERN (MongoDB, Express, React, Node.js) platform for modern African educational institutions. Features a scalable multi-role authentication system using JWT, isolated dashboards for Admins, Teachers, Students, and Parents, AI-assistant integration for educational tools, and Recharts for administrative analytics.",
    "p2": "Secure Authentication Service: A microservice built with Node.js, Redis, and JWT for handling secure user authentication, rate limiting, and session management. Focuses on high performance and security.",
    "p3": "ImpactConnect: A modern full-stack NGO management platform (MERN stack) for managing projects, receiving donations via Paystack, and publishing impact stories. Features decoupled architecture scaling frontend on Vercel and backend on Render."
  };

  const context = projectContexts[projectId] || "Unknown project.";

  try {
    // 3. Call Groq using Vercel's unified generateText function
    const { text } = await generateText({
      model: groq("llama3-8b-8192"), // Using a fast, free model on Groq
      system: "You are an elite senior software architect reviewing a portfolio. Given a project description, provide a highly technical, concise, 2-sentence architectural summary highlighting the engineering value, constraints handled, and system design. Output pure text, no markdown. Use a professional, analytical tone.",
      prompt: `Analyze and summarize this project architecture: ${context}`
    });

    return text;
  } catch (error) {
    console.error("Groq AI Generation Error:", error);
    return "SYSTEM ERROR: Unable to reach Groq AI models to generate architectural summary at this time.";
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
      from: 'Cortex Portfolio <contact@thecortexsystems.com>', // Official domain sender
      to: 'portfolio@thecortexsystems.com', // Official destination inbox
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