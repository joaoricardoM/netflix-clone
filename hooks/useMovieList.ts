import useSWR from "swr";

import fetcher from "@/lib/fetcher";

const useMovieList = () => {
  const { data, error, isLoading } = useSWR("/api/movies", fetcher, {
    revalidateIfState: false,
    revalidateOnFocus: false,
    revalidadeOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export default useMovieList;
