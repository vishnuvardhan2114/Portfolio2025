import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string | "";
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 uppercase",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-source_code_pro font-extrabold text-black dark:text-neutral-200 mb-2 mt-2 ">
          {title}
        </div>
        {link ? (
          <Link
            href={link}
            className="font-source_code_pro flex mx-1 font-medium text-black text-xs dark:text-neutral-300"
          >
            {description} <ArrowUpRight size={17} />
          </Link>
        ) : (
          <span className="font-source_code_pro flex mx-1 font-medium text-black text-xs dark:text-neutral-300">
            {description} <ArrowUpRight size={17} />
          </span>
        )}
      </div>
    </div>
  );
};
