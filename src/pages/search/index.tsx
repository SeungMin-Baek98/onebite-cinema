import SearchableLayout from "@/components/searchable-layout";

import movies from "@/mock/mock.json";
import { ReactNode, useEffect, useState } from "react";
import style from "./index.module.css";
import { useRouter } from "next/router";

import MovieItem from "@/components/movie-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchMovies from "@/lib/fetch-all-movies";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const q = context.query.q;
  const searchResults = await fetchMovies(q as string);
  return {
    props: { searchResults },
  };
};

export default function Page({
  searchResults,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={style.container}>
      {searchResults.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
