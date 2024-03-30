import { Cta } from "@/components/section/Cta";
import { Experiences } from "@/components/section/Experiences";
import { Hero } from "@/components/section/Hero";
import { Highlighted } from "@/components/section/Highlighted";
import { Skills } from "@/components/section/Skills";
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
