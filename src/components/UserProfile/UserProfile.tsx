"use client";

import styles from "./UserProfile.module.scss";
import { useRouter } from "next/navigation";
import { User } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface UserProfileProps {
  user: User;
}

export default function UserProfile({ user }: UserProfileProps) {
  const [load, setLoad] = useState(false);
  const router = useRouter();

  function onBack() {
    setLoad(true);
    router.back();
  }

  return (
    <div className={styles.container}>
      <button disabled={load} className={styles.backBtn} onClick={onBack}>
        Назад
      </button>
      <div className={styles.user}>
        <div className={styles.user__header}>
          <Image priority className={styles.user__avatar} src={user.avatar_url} alt={user.login} width={100} height={100} />

          <div className={styles.user__basic}>
            <h2 className={styles.user__name}>{user.name || user.login}</h2>
            <Link href={user.html_url} target="_blank" className={styles.user__login}>
              @{user.login}
            </Link>
            {user.site_admin && <span className={styles.user__admin}>Site Admin</span>}
          </div>
        </div>

        <div className={styles.user__details}>
          {user.company && (
            <p>
              <strong>Company:</strong> {user.company}
            </p>
          )}
          {user.blog && (
            <p>
              <strong>Blog:</strong>{" "}
              <a href={user.blog} target="_blank" rel="noopener noreferrer">
                {user.blog}
              </a>
            </p>
          )}
          {user.location && (
            <p>
              <strong>Location:</strong> {user.location}
            </p>
          )}
          {user.email && (
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          )}
          {user.bio && (
            <p>
              <strong>Bio:</strong> {user.bio}
            </p>
          )}
          {user.twitter_username && (
            <p>
              <strong>Twitter:</strong>{" "}
              <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noopener noreferrer">
                @{user.twitter_username}
              </a>
            </p>
          )}
        </div>

        <div className={styles.user__stats}>
          <p>
            <strong>Public Repos:</strong> {user.public_repos}
          </p>
          <p>
            <strong>Public Gists:</strong> {user.public_gists}
          </p>
          <p>
            <strong>Followers:</strong> {user.followers}
          </p>
          <p>
            <strong>Following:</strong> {user.following}
          </p>
        </div>

        <div className={styles.user__timestamps}>
          <p>
            <strong>Joined:</strong> {new Date(user.created_at).toLocaleDateString()}
          </p>
          <p>
            <strong>Last Update:</strong> {new Date(user.updated_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
