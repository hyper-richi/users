import { UserItem } from "@/types/types";
import { List, Spin } from "antd";
import React from "react";
import UserCard from "../UserCard/UserCard";
import styles from "./ListUsers.module.scss";

type ListUsersProps = {
  usersData: UserItem[] | [];
};

function ListUsers({ usersData }: ListUsersProps) {
  return (
    <div className={styles.ListUsers}>
      <div style={{ marginTop: 24 }}>
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={usersData}
          renderItem={(item: UserItem) => (
            <List.Item>
              <UserCard user={item} />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default ListUsers;
