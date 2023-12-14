import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório" }),
  email: z
    .string()
    .email({ message: "E-mail inválido" })
    .min(1, { message: "O e-mail é obrigatório" }),
  message: z.string().optional(),
});
