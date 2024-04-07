import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col h-[calc(100vh-240px)] w-full items-center justify-center">
      <div className="text-center px-4">
        <h1 className="mb-4 text-8xl text-gray-400">
          <span className="sr-only">Error</span>404
        </h1>
        <h2>Oops! Página não encontrada.</h2>
        <p className="text-lg">A página que você procura não foi encontrada.</p>

        <Button asChild className="mt-8">
          <Link href="/">Voltar à página inicial</Link>
        </Button>
      </div>
    </section>
  );
}
