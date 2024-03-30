"use server";

import { fetchHygraph } from "@/lib/fetch";
import { GET_HOME, GET_PROJECTS, GET_SOCIALS } from "@/lib/queries";

export async function fetchHome(): Promise<IHome> {
  return fetchHygraph(GET_HOME, 60);
}

export async function fetchPortfolio(): Promise<IProjects> {
  return fetchHygraph(GET_PROJECTS, 60);
}

export async function fetchSocials(): Promise<ISocials> {
  return fetchHygraph(GET_SOCIALS);
}
