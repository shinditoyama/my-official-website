import Link from "next/link";
import { Button } from "../ui/button";

export function Cta() {
  return (
    <section className="py-24 bg-secondary/10 dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="max-w-xl text-center mb-8">
            Preparado para transformar suas ideias em realidade? Estou aqui para
            ajudar.
          </h2>
          <Link href="/contact">
            <Button>Entrar em contato</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
