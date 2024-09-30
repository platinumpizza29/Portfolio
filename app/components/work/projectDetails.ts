import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiWebgl,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "TheMessCompany",
        description:
            "TheMessCompnay is a platform that aims to give a counseling service to people who are suffering from mental health issues.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/platinumpizza29/TheMessCompany",
        demo: "themesscompany.vercel.app",
        image: "/projects/eldoraui.png",
        available: true,
    },
    {
        id: 1,
        name: "Travelle",
        description:
            "This is travelle site developed in nextjs and tailwind css",
        technologies: [SiWebgl,SiTypescript, SiReact],
        techNames: ["Nextjs", "Typescript", "React"],
        techLinks: ["https://get.webgl.org/", "https://www.typescriptlang.org/", "https://reactjs.org/"],
        github: "",
        demo: "",
        image: "/projects/vrmall.png",
        available: false,
    },
];
