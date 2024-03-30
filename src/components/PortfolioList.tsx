"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PortfolioCard } from "./PortfolioCard";

interface Props {
  projects: IProjectAttributes[];
}

export function PortfolioList({ projects }: Props) {
  const [selected, setSelected] = useState("all");

  const uniqueCategories = [
    "all",
    ...new Set(projects.map((item) => item.projectType)),
  ];

  const filteredProjects = projects.filter((project) => {
    return selected === "all" ? project : project.projectType === selected;
  });

  return (
    <Tabs defaultValue={selected}>
      <TabsList
        className={`w-full h-full grid md:grid-cols-3 lg:max-w-[640px] mb-8 mx-auto md:border dark:border-none`}
      >
        {uniqueCategories.map((category, index) => (
          <TabsTrigger
            key={index}
            value={category}
            onClick={() => setSelected(category)}
            className="capitalize w-[162px] mx-auto"
          >
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {filteredProjects.map((product) => (
            <PortfolioCard key={product.slug} project={product} />
          ))}
        </AnimatePresence>
      </div>
    </Tabs>
  );
}
