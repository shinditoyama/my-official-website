import Link from "next/link";
import { TechBadge } from "./TechBadge";

export function HighlightCard() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="">
        <img
          width={420}
          height={304}
          alt="Thumbnail do projeto"
          src="https://www.handtalk.me/br/wp-content/uploads/sites/8/2018/11/capa-blog-2.png"
          className="w-full h-[200px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="text-lg text-gray-50">Projeto Next.js com GraphQL</h3>
        <p className="text-gray-400 text-justify my-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <div className="flex flex-wrap gap-2 mb-8 lg:max-w-sm">
          <TechBadge name="Next.js" />
          <TechBadge name="GraphQL" />
          <TechBadge name="TypeScript" />
          <TechBadge name="TypeScript" />
          <TechBadge name="TypeScript" />
          <TechBadge name="TypeScript" />
        </div>

        <Link
          href="/"
          className="flex items-center gap-2 text-sm hover:text-emerald-500 transition-colors"
        >
          Ver Projeto
        </Link>
      </div>
    </div>
  );
}
