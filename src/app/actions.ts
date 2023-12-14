"use server";

import { fetchHygraph } from "@/lib/fetch";
import { GET_HOME, GET_PROJECTS, GET_SOCIALS } from "@/lib/queries";

/*export async function onSubmit(formData: FormData) {
  const result = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (result.success) {
    return { data: result.data };
  }

  if (result.error) {
    return { error: result.error.format() };
  }
}*/

export async function fetchHome(): Promise<IHome> {
  return fetchHygraph(GET_HOME, 60);
}

export async function fetchProducts(): Promise<IProjects> {
  return fetchHygraph(GET_PROJECTS, 60);
}

export async function fetchSocials(): Promise<ISocials> {
  return fetchHygraph(GET_SOCIALS);
}
