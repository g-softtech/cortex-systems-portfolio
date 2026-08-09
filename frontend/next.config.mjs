/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            // Allow Next.js scripts, Google Fonts, local/GitHub API, and Sanity endpoints
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; img-src 'self' blob: data: cdn.sanity.io; font-src 'self' fonts.gstatic.com data:; connect-src 'self' api.github.com http://localhost:* http://127.0.0.1:* *.api.sanity.io wss://*.api.sanity.io;",
          },
          {
            key: "X-Frame-Options",
            value: "DENY", // Prevents Clickjacking
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Prevents MIME-sniffing
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;