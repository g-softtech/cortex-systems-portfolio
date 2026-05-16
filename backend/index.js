const http = require('http');

const projectSummaries = {
  "p1": "AI Summary: The School Management System is a full-stack application leveraging Next.js (RSC) for optimized data tables and Node.js with PostgreSQL for robust backend operations. It prioritizes efficient administrative workflows and scalability under Vercel's serverless constraints.",
  "p3": "AI Summary: ImpactConnect is a Next.js (TypeScript/Tailwind) platform designed for social impact initiatives. Its serverless architecture ensures cost-efficiency and scalability, while a strong frontend focus delivers an accessible and performant user experience, especially on mobile networks."
  // Add more summaries for other projects as you expand them
};

const server = http.createServer((req, res) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT, DELETE, PATCH',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Private-Network': 'true',
    'Content-Type': 'application/json'
  };

  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    return res.end();
  }

  res.writeHead(200, headers);

  // Handle /api/project-summary/:id endpoint
  if (req.url.startsWith('/api/project-summary/')) {
    const projectId = req.url.split('/').pop();
    const summary = projectSummaries[projectId] || "AI Summary: No detailed architectural summary available for this project yet.";
    res.end(JSON.stringify({ projectId, summary }));
  }
  // Handle root / endpoint for system status
  else if (req.url === '/') {
    res.end(JSON.stringify({ status: 'online', service: 'Cortex Backend API' }));
  } else {
    res.writeHead(404, headers);
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

server.listen(5001, '0.0.0.0', () => {
  console.log('Backend server is running on port 5001');
});