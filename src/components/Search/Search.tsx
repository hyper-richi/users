"use client";
import styles from "./Search.module.scss";
import { Input, Button, List, Spin, message, Space } from "antd"; // import { plural } from "@/app/lib/helpers/plural";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type TypeSearchProps = {
  setSearchText: (value: string) => void;
  loading: boolean;
};

function Search({ setSearchText, loading }: TypeSearchProps) {
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") || "");

  // Debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchText(value);

      const params = new URLSearchParams(searchParams.toString());
      params.set("q", value);
      window.history.pushState(null, "", `?${params.toString()}`);
    }, 500);

    return () => clearTimeout(handler);
  }, [value]);

  function onChange(value: string): void {
    setValue(value);
  }

  return (
    <div className={styles.search}>
      <h1 className={styles.search__title}>GitHub Users</h1>
      <div className={styles.search__box}>
        <input
          className={styles.search__input}
          type="text"
          placeholder="Введите логин пользователя"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={styles.search__btn} disabled={loading}>
          Поиск
        </button>
      </div>
    </div>
  );
}

export default Search;
