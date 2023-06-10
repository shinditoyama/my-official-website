export function ProjectCard() {
  return (
    <div className="flex flex-col h-[436px] rounded-lg overflow-hidden bg-gray-800 border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <img
          width={380}
          height={200}
          alt="Thumbnail do projeto"
          src="https://www.handtalk.me/br/wp-content/uploads/sites/8/2018/11/capa-blog-2.png"
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>

      <div className="flex flex-1 flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">
          Nome Projeto
        </strong>

        <p className="mt-2 text-gray-400 line-clamp-4 text-justify">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English.
        </p>

        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          Next.js, TypeScript, Redux, Next.js, TypeScript, Redux
        </span>
      </div>
    </div>
  );
}
