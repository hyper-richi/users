"use client";

import styles from "./UserProfile.module.scss";
import { useRouter } from "next/navigation";
import { Avatar, Button } from "antd";
import { UserItem } from "@/types/types";
import Image from "next/image";

interface UserProfileProps {
  user: UserItem;
}

const imageStyle = {
  height: "100%",
  border: "1px solid #fff",
};

export default function UserProfile({ user }: UserProfileProps) {
  console.log("user: ", user.avatar_url);
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Button onClick={() => router.back()} style={{ marginBottom: 16 }}>
        Назад
      </Button>
      <div className={styles.user}>
        <div className={styles.user__avatar}>
          <Image priority className={styles.logo} style={imageStyle} src={user.avatar_url} alt={user.login} width={100} height={100} />
        </div>
        <h2 className={styles.user__login}>{user.login}</h2>
        <a className={styles.user__github}>{user.html_url}</a>
      </div>
    </div>
  );
}
