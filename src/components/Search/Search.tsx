"use client";
import styles from "./Search.module.scss";
import { Input, Button, List, Spin, message, Space } from "antd"; // import { plural } from "@/app/lib/helpers/plural";
import { useEffect, useState } from "react";

type TypeSearchProps = {
  setSearchText: (value: string) => void;
  loading: boolean;
};

function Search({ setSearchText, loading }: TypeSearchProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchText(value);
    }, 500);

    return () => clearTimeout(handler);
  }, [value]);

  function onChange(value: string): void {
    setValue(value);
  }

  return (
    <div className={styles.search}>
      <h1 className={styles.search__title}>GitHub Users</h1>
      <Space.Compact style={{ width: "100%" }}>
        <Input
          placeholder="Введите логин пользователя"
          value={value}
          onChange={(e) => onChange(e.target.value)} // onPressEnter={onSearch}
        />
        <Button loading={loading}>{!loading && "Поиск"}</Button>
      </Space.Compact>
    </div>
  );
}

export default Search;
