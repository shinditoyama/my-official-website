"use client";

import { onSubmit } from "@/app/actions";
import { ArrowRight, Mail, MessageCircle, User } from "lucide-react";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

export function Form() {
  const { toast } = useToast();
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();

        await onSubmit(formData);

        toast({
          title: "Formulário enviado com sucesso.",
          duration: 1000,
          variant: "successful",
        });
      }}
      className="flex flex-col gap-y-4"
    >
      <div className="relative flex items-center">
        <Input
          type="name"
          name="name"
          placeholder="Name"
          className="bg-muted"
        />
        <User className="absolute right-6" />
      </div>
      <div className="relative flex items-center">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-muted"
        />
        <Mail className="absolute right-6" />
      </div>
      <div className="relative flex items-center">
        <Textarea
          name="message"
          placeholder="Message"
          className="bg-muted"
          rows={5}
        />
        <MessageCircle className="absolute top-4 right-6" />
      </div>
      <Button className="flex items-center max-w-xs gap-x-2 group">
        Enviar
        <ArrowRight
          size={20}
          className="group-hover:translate-x-2 transition-all duration-300"
        />
      </Button>
    </form>
  );
}
