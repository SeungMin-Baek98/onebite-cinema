import { MovieData } from "@/types";

export default async function fetchRandomMovie(): Promise<MovieData[]> {
  const url = `https://onebite-cinema-api-main-chi.vercel.app/movie/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}
