import React from "react";
import { FloatingDock } from "./custom/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/platinumpizza29",
    },

    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/keyur-bilgi-07521510b/",
    },
    {
      title: "Phone",
      icon: (
        <svg className="h-full w-full text-neutral-500 dark:text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M22 16.92V20a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3.09a1 1 0 0 1 1 .75c.12.73.36 1.44.7 2.1a1 1 0 0 1-.24 1L8.5 8.5a14 14 0 0 0 7 7l1.65-1.02a1 1 0 0 1 1 .24c.66.34 1.37.58 2.1.7a1 1 0 0 1 .75 1V16.92z" />
        </svg>
      ),
      href: "tel:+447824886546",
    },
    {
      title: "Mail",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:kbelgi1@gmail.com",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
