"use client";

import React from "react";
import Link from "next/link";
import { Avatar } from "antd";
import styles from "./UserCard.module.scss";
import { User } from "@/types/types";
import { useRouter } from "next/navigation";

const imageStyle = {
  height: "62px",
  minWidth: "62px",
};

export default function UserCard({ user }: { user: User }) {
  const router = useRouter();

  const openUserPage = (e: { preventDefault: () => void; stopPropagation: () => void }) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/user/${user.id}`);
  };

  return (
    <div className={styles.card} onClick={openUserPage}>
      <Avatar src={user.avatar_url} size={64} style={imageStyle} />
      <div className={styles.info}>
        <div className={styles.login}>{user.login}</div>
        <div className={styles.link}>
          <Link href={user.html_url} target="_blank" onClick={(e) => e.stopPropagation()}>
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
