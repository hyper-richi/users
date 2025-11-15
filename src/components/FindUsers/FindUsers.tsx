"use client";
import Search from "@/components/Search/Search";
import { useGitHubUserSearch } from "@/hooks/useGitHubSearch";
import ListUsers from "@/components/ListUsers/ListUsers";
import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./FindUsers.module.scss";

export default function FindUsers() {
  const { data, loading, error, setSearchText } = useGitHubUserSearch();
  const searchParams = useSearchParams();
  // const [qParam, setQParam] = useState("");

  useEffect(() => {
    const q = searchParams.get("q") || "";
    // setQParam(q);
    if (q) {
      setSearchText(q);
    }
  }, [searchParams]);

  return (
    <div className={styles.users}>
      <Search setSearchText={setSearchText} loading={loading} />

      {loading && (
        <div style={{ textAlign: "center" }}>
          <Spin size="default" className={styles.loader} />
        </div>
      )}
      {error ? (
        <div className="error">
          <span>{error.message}</span>
          {error.status && <span>Код:{error.status}</span>}
        </div>
      ) : (
        <ListUsers usersData={data} />
      )}
    </div>
  );
}
