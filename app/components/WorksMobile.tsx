import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
} from "@tabler/icons-react";
import ProjectImage1 from "@/public/works/Screenshot 2024-10-21 181717.png";
import ProjectImage2 from "@/public/works/project2new.png";
import ProjectImage3 from "@/public/works/project3.png";
import Image from "next/image";

export function WorksMobile() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={
            <Image
              src={item.header}
              alt={item.title || "Image"}
              layout="responsive"
              width={500}
              height={500}
            />
          }
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          link={item.link}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Grey Wall interiors",
    description: "VIEW PROJECTS",
    header: ProjectImage1,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "https://thegreywallinteriors.com/"
  },
  {
    title: "Getavisa",
    description: "VIEW PROJECTS",
    header: ProjectImage2,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://getavisa.in/",
  },
  {
    title: "Bookwise",
    description: "VIEW PROJECTS",
    header: ProjectImage3,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: "https://bookwise-delta.vercel.app/"
  },
];
