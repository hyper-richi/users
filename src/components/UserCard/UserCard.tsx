"use client";

import React from "react";
import Link from "next/link";
import { Card, Avatar } from "antd";
import styles from "./UserCard.module.scss";
import { UserItem } from "@/types/types";
import { useRouter } from "next/navigation";

export default function UserCard({ user }: { user: UserItem }) {
  const router = useRouter();

  const openUserPage = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/user/${user.id}`);
  };

  return (
    <Card hoverable onClick={openUserPage}>
      <div className={styles.card}>
        <Avatar src={user.avatar_url} size={64} />
        <div className={styles.info}>
          <div className={styles.login}>{user.login}</div>
          <div className={styles.links}>
            <Link href={`/user/${user.id}`} target="_blank">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
