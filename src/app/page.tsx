import { Cta } from "@/components/sections/Cta";
import { Experiences } from "@/components/sections/Experiences";
import { Hero } from "@/components/sections/Hero";
import { Highlighted } from "@/components/sections/Highlighted";
import { Skills } from "@/components/sections/Skills";
import { fetchHome } from "./actions";

export const metadata = {
  title: "Home | Shindi Toyama",
};

export default async function Home() {
  const { home, experiences } = await fetchHome();

  return (
    <>
      <Hero pageInfo={home} />
      <Skills techInfo={home.skills} />
      <Highlighted projects={home.highlightProjects} />
      <Experiences experiences={experiences} />
      <Cta />
    </>
  );
}
