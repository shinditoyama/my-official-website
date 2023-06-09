"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { SectionTitle } from "../SectionTitle";

interface IContact {
  name: string;
  email: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().max(300).required(),
});

export function Contact() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IContact>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IContact) => {
    console.log(data);
    reset();
  };

  return (
    <section className="flex items-center px-6 py-16 md:py-32">
      <div className="w-full max-w-sm mx-auto">
        <SectionTitle title="Entre em contato" subtitle="contato" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 w-full flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Nome"
            className="w-full h-14 p-4 rounded-lg bg-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 ring-emerald-600"
            {...register("name")}
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Email"
            className="w-full h-14 p-4 rounded-lg bg-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 ring-emerald-600"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}

          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-32 p-4 rounded-lg bg-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 ring-emerald-600"
            maxLength={300}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-red-600">{errors.message.message}</p>
          )}

          <button
            type="submit"
            className="bg-emerald-600 py-3 px-4 rounded-lg hover:bg-emerald-500 transition-all"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
