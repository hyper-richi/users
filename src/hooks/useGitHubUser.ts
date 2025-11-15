import { useState, useEffect } from "react";
import type { User } from "@/types/types";

interface GitHubError {
  message: string;
  status: number | null;
}

export function useGitHubUser(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<GitHubError | null>(null);

  useEffect(() => {
    if (!userId) {
      setUser(null);
      setError(null);
      return;
    } else {
      fetchUser(userId);
    }
  }, [userId]);

  const fetchUser = async (userId: string) => {
    setError(null);

    try {
      const res = await fetch(`https://api.github.com/user/${userId}`, {
        headers: {
          Accept: "application/vnd.github+json",
        },
      });

      if (!res.ok) {
        if (res.status === 403) {
          setError({
            message: "Превышено кол-во запросов к Api",
            status: res.status,
          });
        } else {
          throw new Error(`Ошибка запроса: ${res.status} ${res.statusText}`);
        }
      } else {
        const json = await res.json();
        setUser(json);
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError({
          message: e.message,
          status: null,
        });
      } else {
        setError({
          message: "Неизвестная ошибка",
          status: null,
        });
      }
    }
  };

  return { user, error };
}
