import { useEffect, useRef, useState } from "react";
import type { GitHubUserSearchResponse, UserItem } from "../types/types";

export function useGitHubUserSearch(initialQuery: string = "kamal") {
  const [data, setData] = useState<UserItem[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchText, setSearchText] = useState(initialQuery);

  // Debounce
  useEffect(() => {
    const query = searchText.trim();
    if (query === "") {
      setError(null);
      return;
    }
    fetchUsers(searchText);
  }, [searchText]);

  const fetchUsers = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://api.github.com/search/users?q=${query}`);

      if (!res.ok) {
        throw new Error(`Ошибка запроса: ${res.status} ${res.statusText}`);
      }

      const json: GitHubUserSearchResponse = await res.json();

      setData(json.items);
    } catch (e: unknown) {
      if (e instanceof Error) setError(e.message);
      else setError("Неизвестная ошибка");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, setSearchText };
}
