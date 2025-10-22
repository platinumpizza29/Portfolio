import React from "react";
import { Timeline } from "./custom/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Mar 2025 - Present",
      content: (
        <div className="space-y-4">
          <h1 className="text-xl font-bold">LoyalTea</h1>
          <h2 className="text-sm text-neutral-600">Full Stack Developer — Remote</h2>
          <ul className="list-disc">
            <li>
              Designed modular loyalty app architecture with microservices to
              parse promotional emails and deliver targeted offers.
            </li>
            <li>
              Built Go (Gin) backend with RESTful APIs, JWT authentication,
              PostgreSQL and MongoDB integration.
            </li>
            <li>
              Developed FastAPI microservice for Mailgun webhook processing with
              BeautifulSoup HTML parsing.
            </li>
            <li>
              Integrated Firebase Auth for mobile authentication with a React
              Native frontend.
            </li>
            <li>
              Achieved ~200ms average API response time with horizontally
              scalable Docker deployment.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Jun 2024 - Feb 2025",
      content: (
        <div className="space-y-4">
          <h1 className="text-xl font-bold">TheMessCompany</h1>
          <h2 className="text-sm text-neutral-600">Frontend Developer — Remote</h2>
          <ul className="list-disc">
            <li>
              Developed responsive web interfaces using React.js, Next.js, and
              Tailwind CSS, increasing user engagement by 30%.
            </li>
            <li>
              Refactored legacy components to functional components with React
              Hooks for improved maintainability.
            </li>
            <li>
              Implemented TypeScript for enhanced type safety and early bug
              detection.
            </li>
            <li>
              Applied UI improvements based on PostHog analytics, reducing
              bounce rates by 20%.
            </li>
            <li>
              Integrated REST APIs with React Query for efficient data
              presentation and state management.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Aug 2020 - Aug 2021",
      content: (
        <div className="space-y-4">
          <h1 className="text-xl font-bold">Ultimate Infosec Technology Pvt Ltd</h1>
          <h2 className="text-sm text-neutral-600">Software Developer — India</h2>
          <ul className="list-disc">
            <li>
              Developed full-stack web applications using React, Node.js, and
              PostgreSQL for complex business requirements.
            </li>
            <li>
              Built RESTful APIs with Node.js (Express) and integrated
              PostgreSQL via Prisma ORM.
            </li>
            <li>
              Created reusable UI components and responsive layouts using
              React, HTML5, CSS3, and JavaScript.
            </li>
            <li>
              Contributed to performance optimizations improving load times and
              user experience.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div className="space-y-4">
          <h1 className="text-xl font-bold">University of Surrey</h1>
          <p className="text-sm text-neutral-600">MSc in Data Science — Sep 2023</p>
          <h1 className="text-xl font-bold">Pune University</h1>
          <p className="text-sm text-neutral-600">BEng in Computer Engineering — Jun 2021</p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
