import { HoverEffect } from "./custom/card-hover-effect";

export function ProjectsComp() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "LoyalTea — Loyalty Microservices",
    description:
      "Microservice architecture for parsing promotional emails and delivering targeted offers. Built with Go (Gin), FastAPI, PostgreSQL and MongoDB.",
    link: "#",
  },
  {
    title: "TheMessCompany — Web Interface",
    description:
      "Responsive Next.js and Tailwind UI rebuilt to improve engagement and reduce bounce rates; integrated with React Query and TypeScript.",
    link: "#",
  },
  {
    title: "Internal Tooling / APIs",
    description:
      "RESTful APIs and CI/CD pipelines using Node.js, Docker and GitHub Actions for production deployments.",
    link: "#",
  },
];
