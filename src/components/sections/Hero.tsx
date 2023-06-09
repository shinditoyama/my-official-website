import { TechBadge } from "../TechBadge";

const MOCK_CONTACTS = [
  { url: "/", icon: "icon" },
  { url: "/", icon: "icon" },
  { url: "/", icon: "icon" },
];

export function HeroSection() {
  return (
    <section className="flex flex-col justify-center w-full py-32 lg:h-screen bg-gray-950">
      <div className="container flex items-center justify-between flex-col-reverse lg:flex-row ">
        <div className="w-full lg:max-w-xl">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Shindi Toyama</h2>

          <p className="text-gray-400 my-6 text-justify text-sm sm:text-lg">
            Olá, meu nome é Shindi Toyama, sou um desenvolvedor front-end
            apaixonado por tecnologias.
          </p>

          <div className="flex flex-wrap gap-2 lg:max-w-sm">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge key={index} name="Next.js" />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-5 mt-6 lg:mt-10">
            <button className="bg-emerald-600 py-3 px-4 rounded-lg hover:bg-emerald-500 transition-all">
              Entre em contato
            </button>

            <div className="text-gray-600 flex items-center gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  key={index}
                  href={contact.url}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <img
          width={420}
          height={404}
          alt="Foto de perfil"
          src="https://source.unsplash.com/100x100/?portrait?0"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 rounded-lg object-cover"
        />
      </div>
    </section>
  );
}
