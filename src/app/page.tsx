"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Search from "@/components/Search/Search";
import { useGitHubUserSearch } from "@/hooks/useGitHubSearch";
import ListUsers from "@/components/ListUsers/ListUsers";
import { Spin } from "antd";

export default function Home() {
  const { data, loading, error, setSearchText } = useGitHubUserSearch();

  return (
    <div className={styles.users}>
      <Search setSearchText={setSearchText} loading={loading} />
      {loading ? (
        <div style={{ textAlign: "center", padding: 24 }}>
          <Spin size="large" />
        </div>
      ) : (
        <ListUsers usersData={data} />
      )}
    </div>
  );
}
