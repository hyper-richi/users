"use client";

import styles from "./UserProfile.module.scss";
import { useRouter } from "next/navigation";
import { Button, Tag } from "antd";
import { UserItem } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface UserProfileProps {
  user: UserItem;
}

const imageStyle = {
  height: "100%",
};

export default function UserProfile({ user }: UserProfileProps) {
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
        <div className={styles.user__name}>
          <div className={styles.user__box}>
            <span className={styles.user__fontSize24}>Login:</span>
            <span className={styles.user__fontSize24}>{user.login}</span>
          </div>
          <div className={styles.user__box}>
            <span>Страница:</span>
            <Link href={user.html_url} target="_blank" className={styles.user__link}>
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
