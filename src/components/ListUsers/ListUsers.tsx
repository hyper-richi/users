import { User } from "@/types/types";
import React from "react";
import UserCard from "../UserCard/UserCard";
import styles from "./ListUsers.module.scss";
import Empty from "../Empty/Empty";

type ListUsersProps = {
  usersData: User[] | [];
};

function ListUsers({ usersData }: ListUsersProps) {
  return (
    <div className={styles.ListUsers}>
      <div style={{ marginTop: 24 }}>
        {usersData.length === 0 ? (
          <Empty />
        ) : (
          <div className={styles.container}>
            {usersData.map((item: User) => (
              <UserCard user={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListUsers;
