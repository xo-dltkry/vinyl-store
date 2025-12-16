import { $host, $authHost } from "./index";
import type { IGenre, IArtist, IVinyl } from "../store/VinylStore";

type CreateGenreDto = Omit<IGenre, "id">
type CreateArtistDto = Omit<IArtist, "id">
type CreateVinylDto = Omit<IVinyl, "id">

export const createGenre = async (genre: CreateGenreDto): Promise<IGenre> => {
  const { data } = await $authHost.post<IGenre>("/api/genre", genre);
  return data
};

export const fetchGenres = async (): Promise<IGenre[]> => {
  const { data } = await $host.get<IGenre[]>("/api/genre");
  return data
};

export const createArtist = async (artist: CreateArtistDto): Promise<IArtist> => {
  const { data } = await $authHost.post<IArtist>("/api/artist", artist);
  return data
};

export const fetchArtists = async (): Promise<IArtist[]> => {
  const { data } = await $host.get<IArtist[]>("/api/artist");
  return data
};

export const createVinyl = async (vinyl: FormData) => {
  const { data } = await $authHost.post("/api/vinyl", vinyl, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const fetchVinyls = async (): Promise<IVinyl[]> => {
  const { data } = await $host.get<IVinyl[]>("/api/vinyl");
  return data
};

export const fetchOneVinyl = async (id: number): Promise<IVinyl> => {
  const { data } = await $host.get<IVinyl>("/api/vinyl/" + id);
  return data
};

