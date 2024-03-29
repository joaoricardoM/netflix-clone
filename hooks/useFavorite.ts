import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useFavorites = () => {
    const {
        data,
        error,
        isLoading,
        mutate
    } = useSWR('api/favorites', fetcher, {
        revalidateIfState: false,
        revalidateOnFocus: false,
        revalidadeOnReconnect: false,
    });
    return {
        data,
        error,
        isLoading,
        mutate,
    };
}

export default useFavorites;