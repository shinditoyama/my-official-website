"use client";
import { Button } from "@/components/Button";
import { RichText } from "@/components/RichText";
import { TechBadge } from "@/components/TechBadge";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface Props {
  pageInfo: IHomePageInfo;
}

export function HeroSection({ pageInfo }: Props) {
  const handleContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col justify-center w-full py-32 lg:h-screen bg-gray-950">
      <div className="container flex items-center justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-xl">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">{pageInfo.name}</h2>

          <div className="text-gray-400 my-6 text-justify text-sm sm:text-lg">
            <RichText content={pageInfo.introduction.raw} />
          </div>

          <div className="flex flex-wrap gap-2 lg:max-w-sm">
            {pageInfo.introTechnologies.map((tech) => (
              <TechBadge key={tech.name} name={tech.name} />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-6 lg:mt-10">
            <Button onClick={handleContact}>
              Entre em contato
              <ChevronRight size={20} />
            </Button>

            <div className="text-gray-600 flex items-center gap-4">
              {pageInfo.socialLinks.map((contact, index) => (
                <a
                  key={index}
                  href={contact.url}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  <div
                    className="text-2xl"
                    dangerouslySetInnerHTML={{
                      __html: contact.icon,
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          alt="Foto de perfil"
          src={pageInfo.avatar.url}
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 rounded-lg object-cover"
        />
      </div>
    </section>
  );
}
